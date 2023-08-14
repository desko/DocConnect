import '@testing-library/cypress/add-commands';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './Navigation';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';
import {Provider} from 'react-redux';
import {store} from '../../store/store';

describe('<Navigation />', () => {
  beforeEach(() => {
    cy.mount(
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <BrowserRouter>
              <Navigation />
            </BrowserRouter>
          </ChakraProvider>
        </Provider>,
    );
  });

  it('renders main navigation', () => {
    cy.findByRole('navigation', {name: /main navigation/i}).should('exist');
  });

  it('renders links', () => {
    cy.findByRole('link', {name: /Specialties/i}).should('exist');
    cy.findByRole('link', {name: /Specialists/i}).should('exist');
  });

  it('routes user to specialties page', () => {
    cy.findByRole('link', {name: /Specialties/i}).click();
    cy.location('pathname').should('match', /\/specialties$/);
  });

  it('routes user to specialties page', () => {
    cy.findByRole('link', {name: /specialists/i}).click();
    cy.location('pathname').should('match', /\/specialists$/);
  });
});
