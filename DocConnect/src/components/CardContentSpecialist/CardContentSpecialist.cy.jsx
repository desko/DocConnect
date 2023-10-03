import CardContentSpecialist from './CardContentSpecialist';
import '@testing-library/cypress/add-commands';
import {BrowserRouter} from 'react-router-dom';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';
import {Provider} from 'react-redux';
import {store} from '../../store/store';

describe('<CardContentSpecialist />', () => {
  beforeEach(() => {
    const mockContent = {
      id: 2000000072,
      imageUrl: 'images/generated_72.png',
      specialityName: 'Cardiology',
      firstName: 'Lisa',
      lastName: 'Dawson',
      address: 'Lorem.',
      rating: 0,
    };
    cy.mount(
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <BrowserRouter>
              <CardContentSpecialist content={mockContent} />
            </BrowserRouter>
          </ChakraProvider>
        </Provider>,
    );
    cy.findByRole('heading', {name: /lisa dawson/i}).as('heading');
    cy.findByRole('group', {name: /rating/i}).as('rating');
    cy.get('strong').as('specialty');
    cy.get('address').as('address');
    cy.findByRole('button', {name: /schedule an appointment/i}).as('btn');
  });

  it('renders with elements', () => {
    cy.get('@heading').should('exist');
    cy.get('@specialty').should('exist');
    cy.get('@rating').should('exist');
    cy.get('@address').should('exist');
    cy.get('@btn').should('exist');
  });
});
