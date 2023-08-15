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

  it('populates form and submits form on button click with duplicate email', () => {
    const mockFormData = {
      email: 'test1@test.com',
      fname: 'Test',
      lname: 'Testov',
      password: 'Test123!',
      confirmPassword: 'Test123!',
    };

    cy.get('@inputEmail').type(mockFormData.email);
    cy.get('@inputFName').type(mockFormData.fname);
    cy.get('@inputLName').type(mockFormData.lname);
    cy.get('@inputPassword').type(mockFormData.password);
    cy.get('@inputConfirmPassword').type(mockFormData.confirmPassword);

    cy.get('@buttonSubmit').click();
    cy.intercept('POST', 'api/User/Register', {
      body: {
        success: false,
        httpStatusCode: 400,
        errorMessage: 'This email is already registered by another user.',
        result: null,
      },
    }).as('signupUser');

    // eslint-disable-next-line max-len
    cy.wait('@signupUser').its('response').as('request').its('statusCode').should('eq', 200);
    cy.get('@request').its('body').should('have.property', 'success');
  });

  it('populates form and submits form on button click with incorrect data - no request to server', () => {
    const mockFormData = {
      email: 'test1@test.com',
      fname: 'Test',
      lname: 'Testov',
      password: 'Test123!',
      confirmPassword: 'Test123',
    };

    cy.get('@inputEmail').type(mockFormData.email);
    cy.get('@inputFName').type(mockFormData.fname);
    cy.get('@inputLName').type(mockFormData.lname);
    cy.get('@inputPassword').type(mockFormData.password);
    cy.get('@inputConfirmPassword').type(mockFormData.confirmPassword);

    cy.get('@buttonSubmit').click();
    cy.intercept('POST', 'api/User/Register', cy.spy().as('myRequest'));

    cy.get('@myRequest').should('not.have.been.called');
  });
});
