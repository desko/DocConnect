import ModalAppointments from './ModalAppointments';
import '@testing-library/cypress/add-commands';
import theme from '../../styles/theme/theme';
import {Button, ChakraProvider, useDisclosure} from '@chakra-ui/react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../store/store';


describe('<ModalAppointments />', () => {
  const mockDoctorId = 2000000000;

  const Wrapper = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Provider store={store}>
            <>
              <Button
                onClick={onOpen}
              >Open</Button>

              <ModalAppointments
                doctorId={mockDoctorId}
                isOpen={isOpen}
                handleClose={onClose}
              />
            </>
          </Provider>
        </ChakraProvider>
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    cy.mount(
        <Wrapper></Wrapper>,
    );
  });

  it('renders with elements, opens and closes', () => {
    cy.findByRole('button', {name: /open/i}).as('toggle').should('exist');
    cy.findByRole('dialog', {name: /schedule an appointment/i}).should('not.exist');

    cy.get('@toggle').click();
    cy.findByRole('dialog', {name: /schedule an appointment/i}).should('exist');
    cy.findByRole('button', {name: /cancel/i}).as('close').should('exist');
    cy.findByRole('button', {name: /schedule/i}).should('exist').and('have.attr', 'disabled');

    cy.intercept('GET', `api/Appointments/DoctorTakenHours?doctorId=${mockDoctorId}`, {
      body: {
        'success': true,
        'httpStatusCode': 200,
        'errorMessage': null,
        'result': [
          '2023-05-22T08:00:00',
          '2023-04-24T10:00:00',
          '2023-02-24T08:00:00',
          '2023-09-27T10:00:00',
          '2023-09-14T09:00:00',
          '2023-09-14T10:00:00',
          '2023-09-14T11:00:00',
        ],
      },
    }).as('appointmentRequest');

    cy.wait('@appointmentRequest');

    cy.get('@close').click();
    cy.findByRole('dialog', {name: /schedule an appointment/i}).should('not.exist');
  });
});
