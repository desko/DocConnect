import '@testing-library/cypress/add-commands';
import {BrowserRouter} from 'react-router-dom';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';
import {Provider} from 'react-redux';
import {store} from '../../store/store';
import SearchSpecialists from './SearchSpecialists';
import {useState} from 'react';

describe('<SearchSpecialists />', () => {
  beforeEach(() => {
    const Wrapper = () => {
      const [cityValue, setCityValue] = useState('');
      const [city, setCity] = useState(null);
      const [nameValue, setNameValue] = useState('');
      const [name, setName] = useState(null);
      const [specialty, setSpecialty] = useState('');
      const [changed, setChanged] = useState(false);
      const mockSpecialties = [
        {
          id: 1,
          name: 'Cardiology',
        },
        {
          id: 6,
          name: 'Dermatology',
        },
        {
          id: 5,
          name: 'Gastroenterology',
        },
        {
          id: 3,
          name: 'Neurology',
        },
        {
          id: 4,
          name: 'Oncology',
        },
        {
          id: 9,
          name: 'Ophthalmology',
        },
        {
          id: 2,
          name: 'Orthopedics',
        },
        {
          id: 7,
          name: 'Pediatrics',
        },
        {
          id: 8,
          name: 'Urology',
        },
      ];

      return (
        <>
          <SearchSpecialists
            specialtyState={{
              specialty,
              setSpecialty,
            }}
            cityState={{
              city,
              setCity,
            }}
            cityValueState={{
              cityValue,
              setCityValue,
            }}
            nameState={{
              name, setName,
            }}
            nameValueState={{
              nameValue,
              setNameValue,
            }}
            selectOptions={mockSpecialties}
            setChanged={setChanged}
          />

          {
            changed && <p>changed</p>
          }
        </>
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
    cy.findByRole('group', {name: /specialist name/i}).as('groupSpecialist');
    cy.findByRole('group', {name: /specialty/i}).as('groupSpecialty');
    cy.findByRole('group', {name: /city/i}).as('groupCity');
  });

  it('renders with elements', () => {
    cy.get('@groupSpecialist').should('exist');
    cy.get('@groupSpecialty').should('exist');
    cy.get('@groupCity').should('exist');
  });

  it('triggers custom event', () => {
    cy.findByText('changed').should('not.exist');
    cy.get('@groupSpecialist').trigger('customchange');
    cy.findByText('changed').should('exist');
  });

  it('triggers change event', () => {
    cy.findByText('changed').should('not.exist');
    cy.get('@groupSpecialty').trigger('change');
    cy.findByText('changed').should('exist');
  });
});
