import '@testing-library/cypress/add-commands';
import {ChakraProvider} from '@chakra-ui/react';
import CardContent from './CardContent';
import theme from '../../styles/theme/theme';


const mockContent = 'Cardiology';

describe('<CardContent />', () => {
  beforeEach(() => {
    cy.mount(
        <ChakraProvider theme={theme}>
          <CardContent content={mockContent} />
        </ChakraProvider>,
    );
  });

  it('renders a heading', () => {
    cy.findByRole('heading', {name: /cardiology/i}).should('exist');
  });
});
