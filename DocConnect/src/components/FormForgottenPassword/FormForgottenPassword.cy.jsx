import FormForgottenPassword from './FormForgottenPassword';
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
              <FormForgottenPassword />
            </Provider>
          </ChakraProvider>
        </BrowserRouter>,
    );

    // Heading
    cy.findByRole('heading', {name: /forgot password/i}).as('heading');

    // Text
    // eslint-disable-next-line max-len
    cy.findByText(/please enter your email address\. you will receive a link to create a new password via email\./i).as('text');

    // Email
    cy.findByRole('textbox', {name: /email address \*/i}).as('inputEmail');
    cy.findByText(/email address \*/i).as('labelEmail');

    // Submit button
    cy.findByRole('button', {name: /submit/i}).as('submitButton');
  });

  it('should render with all elements', () => {
    cy.get('@heading').should('exist');
    cy.get('@inputEmail').should('exist');
    cy.get('@labelEmail').should('exist');
    cy.get('@submitButton').should('exist');
  });

  it('should populates form with invalid email', () => {
    const mockEmail = 'test@test';
    cy.findByText(/please enter a valid email address\./i).should('not.exist');
    cy.get('@inputEmail').type(mockEmail);
    cy.get('@labelEmail').click();
    cy.findByText(/please enter a valid email address\./i).should('exist');
    cy.get('@submitButton').should('be.disabled');
    cy.get('@submitButton').click({force: true});
    cy.intercept('POST', 'api/User/RequestForgottenPassword', cy.spy().as('myRequest'));

    cy.get('@myRequest').should('not.have.been.called');
  });

  it('should populates form with valid email and submit', () => {
    const mockEmail = 'test@test.com';
    cy.findByText(/please enter a valid email address\./i).should('not.exist');
    cy.get('@inputEmail').type(mockEmail);
    cy.get('@labelEmail').click();
    cy.findByText(/please enter a valid email address\./i).should('not.exist');
    cy.get('@submitButton').should('not.be.disabled');
    cy.get('@submitButton').click();
    cy.intercept('POST', 'api/User/RequestForgottenPassword', {
      body: {
        success: true,
        httpStatusCode: 200,
        errorMessage: null,
        result: null,
      },
    }).as('requestForgotten');
    cy.wait('@requestForgotten').its('response').as('request').its('statusCode').should('eq', 200);

    // eslint-disable-next-line max-len
    cy.findByText(/if a matching account was found an email was sent to to allow you to reset your password\./i).should('exist');
  });
});
