import SpecialistsController from './SpecialistsController';
import '@testing-library/cypress/add-commands';
import {BrowserRouter} from 'react-router-dom';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';
import {Provider} from 'react-redux';
import {store} from '../../store/store';

describe('<SpecialistsController />', () => {
  const mockResultCardiology = [
    {
      id: 2000000000,
      imageUrl: 'images/generated_0.png',
      specialityName: 'Cardiology',
      firstName: 'Jonathan',
      lastName: 'Walker',
      address: '',
      rating: 0,
    },
    {
      id: 2000000009,
      imageUrl: 'images/generated_9.png',
      specialityName: 'Cardiology',
      firstName: 'Kelly',
      lastName: 'Evans',
      address: '',
      rating: 0,
    },
    {
      id: 2000000018,
      imageUrl: 'images/generated_18.png',
      specialityName: 'Cardiology',
      firstName: 'Jim',
      lastName: 'Maynard',
      address: '',
      rating: 0,
    },
    {
      id: 2000000027,
      imageUrl: 'images/generated_27.png',
      specialityName: 'Cardiology',
      firstName: 'James',
      lastName: 'Martin',
      address: '',
      rating: 0,
    },
    {
      id: 2000000036,
      imageUrl: 'images/generated_36.png',
      specialityName: 'Cardiology',
      firstName: 'Gloria',
      lastName: 'Hoffman',
      address: '',
      rating: 0,
    },
    {
      id: 2000000045,
      imageUrl: 'images/generated_45.png',
      specialityName: 'Cardiology',
      firstName: 'Teresa',
      lastName: 'Keith',
      address: '',
      rating: 0,
    },
    {
      id: 2000000054,
      imageUrl: 'images/generated_54.png',
      specialityName: 'Cardiology',
      firstName: 'Brian',
      lastName: 'Davidson',
      address: '',
      rating: 0,
    },
    {
      id: 2000000063,
      imageUrl: 'images/generated_63.png',
      specialityName: 'Cardiology',
      firstName: 'Mary',
      lastName: 'Lewis',
      address: '',
      rating: 0,
    },
    {
      id: 2000000072,
      imageUrl: 'images/generated_72.png',
      specialityName: 'Cardiology',
      firstName: 'Lisa',
      lastName: 'Dawson',
      address: '',
      rating: 0,
    },
  ];
  beforeEach(() => {
    cy.mount(
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <BrowserRouter>
              <SpecialistsController />
            </BrowserRouter>
          </ChakraProvider>
        </Provider>,
    );
    cy.findByRole('group', {name: /specialist name/i}).as('groupSpecialist');
    cy.findByRole('group', {name: /specialty/i}).as('groupSpecialty');
    cy.findByRole('group', {name: /city/i}).as('groupCity');
    // cy.findByRole('group', {name: /card/i}).as('card');
  });

  it('renders with elements', () => {
    cy.get('@groupSpecialist').should('exist');
    cy.get('@groupSpecialty').should('exist');
    cy.get('@groupCity').should('exist');
    cy.findByRole('group', {name: /card/i}).should('not.exist');
  });

  it('makes a specialty choice - request', () => {
    cy.get('@groupSpecialty').get('select').select('1');
    cy.get('@groupSpecialty').get('select').trigger('change');
    cy.findByRole('group', {name: /card/i}).should('not.exist');
    cy.intercept('GET', 'api/Specialists?specialtyId=1&doctorName=', {
      body: mockResultCardiology,
    }).as('request');

    cy.wait('@request').its('response').as('request').its('statusCode').should('eq', 200);
    cy.get('@request').its('body').should('have.length', 9);
  });

  it('types into name - jim', () => {
    cy.get('@groupSpecialist').find('input').type('jim');
    cy.findByRole('group', {name: /card/i}).should('not.exist');
    cy.intercept('GET', 'api/Specialists?specialtyId=1&doctorName=jim', {
      body: [mockResultCardiology.find((el) => el.firstName.toLowerCase() === 'jim')],
    }).as('request');

    cy.wait('@request').its('response').as('request').its('statusCode').should('eq', 200);
    cy.get('@request').its('body').should('have.length', 1);
  });

  it('types into name - gibberish', () => {
    cy.get('@groupSpecialty').find('select').select('');
    cy.get('@groupSpecialty').find('select').trigger('change');
    cy.get('@groupSpecialist').find('input').type('asdas');
    cy.get('@groupSpecialty').click();
    cy.findByRole('group', {name: /card/i}).should('not.exist');
    cy.findByText(/no results found/i).should('not.exist');
    cy.intercept('GET', 'api/Specialists?specialtyId=&doctorName=asdas', {
      body: [],
    }).as('request');

    cy.wait('@request').its('response').as('request').its('statusCode').should('eq', 200);
    cy.get('@request').its('body').should('have.length', 0);
  });
});
