import FormLogin from './FormLogin';
import '@testing-library/cypress/add-commands';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../store/store';

describe('FormLogin', () => {
  beforeEach(() => {
    cy.mount(
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <Provider store={store}>
              <FormLogin />
            </Provider>
          </ChakraProvider>
        </BrowserRouter>,
    );


    // Heading
    cy.findByRole('heading', {name: /login/i}).as('heading').should('exist');

    // Email
    cy.findByText(/email address \*/i).as('emailLabel').should('exist');
    cy.findByText(/email address \*/i).as('emailInput').should('exist');

    // Password
    cy.findByText(/password \*/i).as('passwordLabel').should('exist');
    cy.findByLabelText(/password \*/i).as('passwordInput').should('exist');

    // Forgot password link
    cy.findByRole('link', {name: /forgot password\?/i}).as('resetPasswordLink').should('exist');

    // Submit button
    cy.findByRole('button', {name: /login/i}).as('submitButton').should('exist');
  });

  it('should render with all elements', () => {
    cy.get('@heading').should('exist');

    cy.get('@emailLabel').should('exist');
    cy.get('@emailInput').should('exist');

    cy.get('@passwordLabel').should('exist');
    cy.get('@passwordInput').should('exist');

    cy.get('@resetPasswordLink').should('exist');

    cy.get('@submitButton').should('exist');
  });

  it('should show error messages if fields are empty on submit', () => {
    cy.get('@submitButton').click({force: true});
    cy.intercept('POST', '/api/User/Login', cy.spy().as('sendRequest'));
    cy.get('@sendRequest').should('not.have.been.called');
  });


  it('should return a JWT token on successful request', () => {
    // cy.clearAllLocalStorage();
    cy.get('@emailInput').type('test@test.test');
    cy.get('@passwordInput').type('Test123!');
    cy.get('@submitButton').click();

    cy.intercept('POST', '/api/User/Login', {
      body: {
        result: 'JWTToken',
      },
    }).as('sendRequest');

    cy.wait('@sendRequest').its('response').as('request').its('statusCode').should('eq', 200);
    cy.get('@request').its('body').should('have.property', 'result');
  });
});
