import Pagination from './Pagination';
import '@testing-library/cypress/add-commands';
import {BrowserRouter} from 'react-router-dom';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';
import {Provider} from 'react-redux';
import {store} from '../../store/store';
import {useState} from 'react';

describe('<Pagination />', () => {
  beforeEach(() => {
    const Wrapper = () => {
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(3);
      const [totalItems] = useState(18);

      return (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      );
    };

    cy.mount(
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <BrowserRouter>
              <Wrapper></Wrapper>
            </BrowserRouter>
          </ChakraProvider>
        </Provider>,
    );
    cy.findByRole('button', {name: /first/i}).as('first');
    cy.findByRole('button', {name: /previous/i}).as('previous');
    cy.findByRole('button', {name: /next/i}).as('next');
    cy.findByRole('button', {name: /last/i}).as('last');
  });


  it('renders with elements', () => {
    cy.get('@first').should('exist');
    cy.get('@previous').should('exist');
    cy.get('@next').should('exist');
    cy.get('@last').should('exist');
    cy.findByRole('button', {name: /1/i}).as('page1').should('exist');
    cy.findByRole('button', {name: /2/i}).as('page2').should('exist');
    cy.findByRole('button', {name: /3/i}).as('page3').should('exist');
    cy.get('@first').should('be.disabled');
    cy.get('@previous').should('be.disabled');
    cy.get('@page1').should('have.attr', 'data-active');
  });

  it('changes pages with number buttons', () => {
    cy.findByRole('button', {name: /1/i}).as('page1');
    cy.findByRole('button', {name: /2/i}).as('page2');
    cy.get('@page1').should('have.attr', 'data-active');
    cy.get('@page2').should('not.have.attr', 'data-active');
    cy.get('@page2').click();
    cy.get('@page1').should('not.have.attr', 'data-active');
    cy.get('@page2').should('have.attr', 'data-active');
  });

  it('changes pages with arrow buttons', () => {
    cy.findByRole('button', {name: /1/i}).as('page1').should('have.attr', 'data-active');
    cy.get('@next').click();
    cy.get('@page1').should('not.have.attr', 'data-active');
    cy.findByRole('button', {name: /2/i}).as('page2').should('have.attr', 'data-active');
    cy.get('@previous').click();
    cy.get('@page2').should('not.have.attr', 'data-active');
    cy.get('@page1').should('have.attr', 'data-active');

    cy.get('@next').click();
    cy.get('@page1').should('not.have.attr', 'data-active');
    cy.get('@first').click();
    cy.get('@page1').should('have.attr', 'data-active');

    cy.get('@last').click();
    cy.findByRole('button', {name: /6/i}).as('page6');
    cy.get('@page6').should('have.attr', 'data-active');
    cy.get('@first').should('not.be.disabled');
    cy.get('@previous').should('not.be.disabled');
    cy.get('@last').should('be.disabled');
    cy.get('@next').should('be.disabled');
  });
});
