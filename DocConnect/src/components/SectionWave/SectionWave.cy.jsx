import '@testing-library/cypress/add-commands';
import {ChakraProvider} from '@chakra-ui/react';
import SectionWave from './SectionWave';
import theme from '../../styles/theme/theme';

const mockTitle = 'Section';
const mockText = 'test';

describe('<Section />', () => {
  beforeEach(() => {
    cy.mount(
        <ChakraProvider theme={theme}>
          <SectionWave title={mockTitle}>
            <p>{mockText}</p>
          </SectionWave>
        </ChakraProvider>,
    );
  });

  it('renders Section', () => {
    cy.findByRole('region', {name: /section/i}).should('exist');
  });

  it('has Title in a header', () => {
    cy.findByRole('banner').as('header').should('exist');
  });

  it('has content after header', () => {
    cy.findByText(/test/i).should('exist');
  });
});
