import '@testing-library/cypress/add-commands';
import Card from './Card';
import CardContent from '../CardContent/CardContent';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../../styles/theme/theme';


const mockData = {
  'id': 1,
  // eslint-disable-next-line max-len
  'imageUrl': 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'name': 'Cardiology',
};

describe('Card', () => {
  beforeEach(() => {
    cy.mount(
        <ChakraProvider theme={theme}>
          <Card Component={CardContent} imageUrl={mockData.imageUrl} content={mockData.name} />
        </ChakraProvider>,
    );
  });

  it('Check render with image', () => {
    cy.findByRole('img', {
      name: /cardiology/i,
    }).should('exist');
  });

  it('Check render with content', () => {
    cy.findByRole('heading', {
      name: /cardiology/i,
    }).should('exist');
  });
});
