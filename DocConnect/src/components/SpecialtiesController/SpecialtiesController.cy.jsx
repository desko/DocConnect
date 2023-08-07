import '@testing-library/cypress/add-commands';
import SpecialtiesController from './SpecialtiesController';
import {Provider} from 'react-redux';
import {store} from '../../store/store';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../../styles/theme/theme';


describe('<SpecialtiesController />', () => {
  beforeEach(() => {
    cy.mount(
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <SpecialtiesController />
          </ChakraProvider>
        </Provider>,
    );
  });

  it('renders Cards with images', () => {
    cy.get('img').should('exist');
  });

  it('renders Cards with headings', () => {
    cy.get('h3').should('exist');
  });
});
