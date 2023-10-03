import '@testing-library/cypress/add-commands';
import SystemNotification from './SystemNotification';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../../styles/theme/theme';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../store/store';

describe('<SystemNotificaition />', () => {
  beforeEach(() => {
    cy.mount(
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <Provider store={store}>
              <SystemNotification />
            </Provider>
          </ChakraProvider>
        </BrowserRouter>,
    );
  });
  it('should render successfully', () => {
    cy.findByRole('alert').should('exist');
    cy.findByText(/your email is not verified!/i).should('exist');
    cy.findByRole('button', {name: /resend/i}).should('exist');
  });
  it('should disable the button when clicked', () => {
    cy.findByRole('button', {name: /resend/i}).as('button').should('exist').should('not.be.disabled');
    cy.get('@button').click();
    cy.get('@button').should('be.disabled');
  });
});
