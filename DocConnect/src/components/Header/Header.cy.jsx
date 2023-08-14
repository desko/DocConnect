import '@testing-library/cypress/add-commands';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';
import {Provider} from 'react-redux';
import {store} from '../../store/store';

describe('<Header />', () => {
  beforeEach(() => {
    cy.mount(
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <BrowserRouter>
              <Header />
            </BrowserRouter>
          </ChakraProvider>
        </Provider>,
    );
    cy.findByRole('group', {name: /header/i}).as('header');
    cy.findByRole('button', {name: /menu button/i}).as('menu-button');
  });

  it('renders Header', () => {
    cy.get('@header').should('exist');
  });

  it('renders with menu button', () => {
    cy.get('@menu-button').should('exist');
  });

  it('activates menu on menu button click', () => {
    cy.get('@header').should('not.have.attr', 'data-checked');
    cy.findByRole('button', {name: /menu button/i}).as('menu-button').should('exist');
    cy.get('@menu-button').click();
    cy.get('@header').should('have.attr', 'data-checked');
  });

  it('renders with user authenticate buttons', () => {
    cy.get('@menu-button').click();
    cy.findByRole('link', {name: /login/i}).should('exist');
    cy.findByRole('button', {name: /sign up/i}).should('exist');
  });

  it('renders with navigation component', () => {
    cy.get('@menu-button').click();
    cy.findByRole('navigation', {name: /main navigation/i}).should('exist');
  });

  it('routes to login page', () => {
    cy.get('@menu-button').click();
    cy.findByRole('link', {name: /login/i}).click();
    cy.location('pathname').should('match', /\/login$/);
  });

  it('routes to sign up page', () => {
    cy.get('@menu-button').click();
    cy.findByRole('button', {name: /sign up/i}).click();
    cy.location('pathname').should('match', /\/signup$/);
  });
});
