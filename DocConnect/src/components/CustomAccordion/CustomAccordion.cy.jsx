import CustomAccordion from './CustomAccordion';
import {BrowserRouter} from 'react-router-dom';
import '@testing-library/cypress/add-commands';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';

describe('<CustomAccordion />', () => {
  beforeEach(() => {
    const mockAppointment = {
      address: '61251 Melissa Radial Apt. 746',
      date: '11/11/2023',
      doctorName: 'Jonathan Walker',
      id: 7,
      patientName: 'Test Test',
      doctorSpecialty: 'Cardiology',
    };

    cy.mount(
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <CustomAccordion
              key={mockAppointment.id}
              doctorName={mockAppointment.doctorName}
              date={mockAppointment.date}
              address={mockAppointment.address}
              specialty={mockAppointment.doctorSpecialty}
            />
          </BrowserRouter>
        </ChakraProvider>,
    );

    cy.findByRole('button', {name: /date 11\/11\/2023 doctor jonathan walker specialty/i}).as('appointmentButton');
    cy.findByText(/11\/11\/2023/i).as('date');
    cy.findByText(/jonathan walker/i).as('doctorName');
    cy.findByText(/cardiology/i).as('doctorSpecialty');
  });

  it('should render with all elements', () => {
    cy.get('@appointmentButton').should('exist');
    cy.get('@date').should('exist');
    cy.get('@doctorName').should('exist');
    cy.get('@doctorSpecialty').should('exist');
  });

  it('should open and close the more details', () => {
    cy.get('@appointmentButton').click();
    cy.findByRole('region', {name: /date 11\/11\/2023 doctor jonathan walker specialty cardiology/i})
        .as('moreDetails').should('exist');
    cy.get('@appointmentButton').click();
    cy.get('@moreDetails').should('not.exist');
  });
});
