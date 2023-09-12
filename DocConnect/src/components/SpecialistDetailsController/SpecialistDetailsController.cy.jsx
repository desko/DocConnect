import SpecialistDetailsController from './SpecialistDetailsController';
import '@testing-library/cypress/add-commands';
import {BrowserRouter} from 'react-router-dom';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';
import {Provider} from 'react-redux';
import {store} from '../../store/store';

const Wrapper = () => {
  return <Provider store={store}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <SpecialistDetailsController></SpecialistDetailsController>
      </BrowserRouter>
    </ChakraProvider>
  </Provider>;
};

describe('<SpecialistDetailsController />', () => {
  beforeEach(() => {
    // cy.session.clearAllSavedSessions();
    cy.mount(
        <Wrapper />,
    );
  });

  it('renders with elements - correct response', () => {
    const mockResponse = {
      success: true,
      httpStatusCode: 200,
      errorMessage: null,
      result: {
        imageUrl: 'https://docconnect-red-cdn.test.devsmm.com/images/generated_9.png',
        specialityName: 'Cardiology',
        firstName: 'Kelly',
        lastName: 'Evans',
        address: '0103 Jamie Point Apt. 976, Toledo',
        // eslint-disable-next-line max-len
        doctorSummary: 'Dr. Kelly Evans is a cardiologist based in Toledo, Ohio. With over 2 years of experience, Dr. Evans specializes in the diagnosis, treatment, and prevention of heart diseases and other related ailments. He is highly knowledgeable in the field and is dedicated to providing personalized, comprehensive care to his patients.',
        rating: 2.3333333333333335,
      },
    };
    cy.intercept('GET', 'api/Specialists/undefined', {body: mockResponse}).as('req');
    cy.wait('@req');

    cy.findByRole('img', {name: /kelly evans/i}).as('img').should('exist');
    cy.get('h2').as('name').should('exist');
    cy.findByText(/cardiology/i).as('spec').should('exist');
    cy.findByRole('group', {name: /address/i}).should('exist');
    cy.findByRole('button').as('btn').should('exist');
    cy.findByRole('group', {name: /about kelly evans/i}).should('exist');
    cy.findByRole('heading', {name: /about kelly evans/i}).should('exist');
  });

  it('renders with elements - error response', () => {
    const mockResponse = {
      success: true,
      httpStatusCode: 200,
      errorMessage: null,
      result: null,
    };
    cy.intercept('GET', 'api/Specialists/undefined', {body: mockResponse}).as('req');


    // cy.wait('@req');

    cy.findByRole('alert').should('exist');

    cy.findByRole('img', {name: /kelly evans/i}).should('not.exist');
    cy.get('h2').should('not.exist');
    cy.findByText(/cardiology/i).should('not.exist');
    cy.findByRole('group', {name: /address/i}).should('not.exist');
    cy.findByRole('button').should('not.exist');
    cy.findByRole('group', {name: /about kelly evans/i}).should('not.exist');
    cy.findByRole('heading', {name: /about kelly evans/i}).should('not.exist');
  });
});
