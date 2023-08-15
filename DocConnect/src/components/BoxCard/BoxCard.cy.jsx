import '@testing-library/cypress/add-commands';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';
import BoxCard from './BoxCard';

describe('<BoxCard />', () => {
  beforeEach(() => {
    cy.mount(
        <ChakraProvider theme={theme}>
          <BoxCard
            customProps={{
              'aria-label': 'Signup',
              'role': 'group',
            }}
          >
            <p>text</p>
          </BoxCard>
        </ChakraProvider>,
    );
  });

  it('renders', () => {
    cy.findByRole('group', {name: /signup/i}).should('exist');
  });

  it('renders with child text', () => {
    cy.findByText(/text/i).should('exist');
  });
});
