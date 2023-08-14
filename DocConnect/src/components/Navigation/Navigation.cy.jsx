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

  it('renders', () => {
    
  });
});
