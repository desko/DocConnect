import '@testing-library/cypress/add-commands';
import SystemMessage from './SystemMessage';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../../styles/theme/theme';
import {BrowserRouter} from 'react-router-dom';
// import {SYSTEM_MESSAGE} from '../../common/systemMsgConsts';

describe('<SpecialtiesController />', () => {
  it('should render registration success message card', () => {
    cy.mount(
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <SystemMessage type={'SUCCESSFUL_REGISTRATION'}/>
          </ChakraProvider>
        </BrowserRouter>,
    );

    cy.findByRole('heading', {name: /congratulations!/i}).should('exist');
    cy.findByText(/your account has been created successfully\./i).should('exist');
    cy.findByRole('link', {name: /go to the login page/i}).as('login-link').should('exist');
    cy.get('@login-link').click();
    cy.location('pathname').should('match', /\/login$/);
  });

  it('should render verification success message card', () => {
    cy.mount(
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <SystemMessage type={'SUCCESSFUL_VERIFICATION'}/>
          </ChakraProvider>
        </BrowserRouter>,
    );

    cy.findByRole('heading', {name: /congratulations!/i}).should('exist');
    cy.findByText(/your account was successfully verified\./i).should('exist');
    cy.findByRole('link', {name: /go to the login page/i}).as('login-link').should('exist');
    cy.get('@login-link').click();
    cy.location('pathname').should('match', /\/login$/);
  });

  it('should render invalid token message card', () => {
    cy.mount(
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <SystemMessage type={'INVALID_TOKEN'}/>
          </ChakraProvider>
        </BrowserRouter>,
    );

    cy.findByRole('heading', {name: /the token expired or is invalid/i}).should('exist');
    cy.findByText(/please login and request another verification email\./i).should('exist');
    cy.findByRole('link', {name: /go to the login page/i}).as('login-link').should('exist');
    cy.get('@login-link').click();
    cy.location('pathname').should('match', /\/login$/);
  });

  it('should render already verified message card', () => {
    cy.mount(
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <SystemMessage type={'ALREADY_VERIFIED'}/>
          </ChakraProvider>
        </BrowserRouter>,
    );

    cy.findByRole('heading', {name: /your account has already been verified!/i}).should('exist');
    cy.findByText(/you can login and use all of the website functionalities\./i).should('exist');
    cy.findByRole('link', {name: /go to the login page/i}).as('login-link').should('exist');
    cy.get('@login-link').click();
    cy.location('pathname').should('match', /\/login$/);
  });

  it('should render error message card', () => {
    cy.mount(
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <SystemMessage type={'ERROR'}/>
          </ChakraProvider>
        </BrowserRouter>,
    );

    cy.findByRole('heading', {name: /error/i}).should('exist');
    cy.findByText(/an unexpected error has ocurred, please try again\./i).should('exist');
    cy.findByRole('link', {name: /go to the login page/i}).should('not.exist');
  });
});
