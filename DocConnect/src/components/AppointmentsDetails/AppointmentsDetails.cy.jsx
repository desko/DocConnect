import AppointmentsDetails from './AppointmentsDetails';
import '@testing-library/cypress/add-commands';
import {BrowserRouter} from 'react-router-dom';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';
import {Provider} from 'react-redux';
import {store} from '../../store/store';

describe('AppointmentsDetails', () =>{
  beforeEach(()=> {
    const mockAppointments = [
      {
        address: '61251 Melissa Radial Apt. 746',
        date: '11/11/2023',
        doctorName: 'Jonathan Walker',
        id: 7,
        patientName: 'Test Test',
        doctorSpecialty: 'Cardiology',
      },
      {
        address: '61251 Melissa Radial Apt. 746',
        date: '11/12/2023',
        doctorName: 'Jonathan Walker',
        id: 8,
        patientName: 'Test Test',
        doctorSpecialty: 'Cardiology',
      },
      {
        address: '6727 Daniel Drives',
        date: '12/12/2023',
        doctorName: 'Rick Shaffer',
        id: 6,
        patientName: 'Test Test',
        doctorSpecialty: 'Orthographics',
      },
    ];

    cy.mount(
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <BrowserRouter>
              <AppointmentsDetails upcomingAppointments={mockAppointments} />
            </BrowserRouter>
          </ChakraProvider>
        </Provider>,
    );

    cy.findByRole('tab', {name: /upcoming appointments/i}).as('upcomingButton');
    cy.findByRole('tab', {name: /past appointments/i}).as('pastButton');
    cy.findByRole('tabpanel', {name: /upcoming appointments/i}).as('upcomingTab');
    cy.findByRole('button', {name: /date 11\/12\/2023 doctor jonathan walker specialty/i}).as('appointmentButton');
  });

  it('should render all elements', () => {
    cy.get('@upcomingButton').should('exist');
    cy.get('@upcomingTab').should('exist');
    cy.get('@appointmentButton').should('exist');
    cy.get('@pastButton').should('be.disabled');
  });

  it('should render all 3 appointments', () => {
    cy.get('@upcomingTab').find('button').its('length').should('eq', 3);
  });

  it('should open and close more details', () => {
    cy.get('@appointmentButton').click();
    cy.findByRole('region', {name: /date 11\/12\/2023 doctor jonathan walker specialty/i})
        .as('moreDetails').should('exist');
    cy.get('@appointmentButton').click();
    cy.get('@moreDetails').should('not.exist');
  });
});
