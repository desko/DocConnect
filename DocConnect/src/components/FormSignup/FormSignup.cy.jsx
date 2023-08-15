import FormSignup from './FormSignup';
import '@testing-library/cypress/add-commands';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';
import {BrowserRouter} from 'react-router-dom';

describe('<FormSignup />', () => {
  beforeEach(() => {
    cy.mount(
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <FormSignup/>
          </ChakraProvider>
        </BrowserRouter>,
    );
    cy.findByText(/email address \*/i).as('labelEmail');
    cy.findByRole('textbox', {name: /email address \*/i}).as('inputEmail');

    // fist name
    cy.findByText(/first name \*/i).as('labelFName');
    cy.findByRole('textbox', {name: /first name \*/i}).as('inputFName');

    // last name
    cy.findByText(/last name \*/i).as('labelLName');
    cy.findByRole('textbox', {name: /last name \*/i}).as('inputLName');

    // password
    cy.get('input[name="password"]').as('inputPassword');
    cy.get('@inputPassword').then(
        ($el) => {
          const elId = $el[0].id;
          cy.get(`label[for="${elId}"]`).as('labelPassword');
        },
    );

    // confirm password
    cy.findByText(/confirm password \*/i).as('labelConfirmPassword');
    cy.findByLabelText(/confirm password \*/i).as('inputConfirmPassword');

    // button signup
    cy.findByRole('button', {name: /sign up/i}).as('buttonSubmit');
  });

  it('renders with fields', () => {
    cy.findByRole('group', {name: /signup/i}).should('exist');
    cy.findByRole('heading', {name: /sign up/i}).should('exist');
    cy.findByText(/already have an account\?/i).should('exist');
    cy.findByRole('link', {name: /login/i}).should('exist');

    // email
    cy.get('@labelEmail').should('exist');
    cy.get('@inputEmail').should('exist');

    // first name
    cy.get('@labelFName').should('exist');
    cy.get('@inputFName').should('exist');

    // last name
    cy.get('@labelLName').should('exist');
    cy.get('@inputLName').should('exist');

    // password
    cy.get('@inputPassword').should('exist');
    cy.get('@inputPassword').then(
        ($el) => {
          const elId = $el[0].id;
          cy.get(`label[for="${elId}"]`).should('exist');
        },
    );

    // confirm password
    cy.get('@labelConfirmPassword').should('exist');
    cy.get('@inputConfirmPassword').should('exist');

    // button signup
    cy.findByRole('button', {name: /sign up/i}).should('exist');
  });

  it('submits form on button click', () => {

  });
});
