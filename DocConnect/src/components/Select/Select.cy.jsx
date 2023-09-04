import Select from './Select';
import '@testing-library/cypress/add-commands';
import {BrowserRouter} from 'react-router-dom';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';
import {Provider} from 'react-redux';
import {store} from '../../store/store';
import {useState} from 'react';

describe('<Select />', () => {
  beforeEach(() => {
    const Wrapper = () => {
      const mockOptions = [
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
      const [values, setValue] = useState('');

      return (
        <Select
          options={mockOptions}
          label='Specialty'
          setSelected={setValue}
          value={values}
        ></Select>
      );
    };
    cy.mount(
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <BrowserRouter>
              <Wrapper/>
            </BrowserRouter>
          </ChakraProvider>
        </Provider>,
    );
    cy.findByRole('group', {name: /specialty/i}).as('group');
    cy.findByText(/specialty/i).as('label');
    cy.findByRole('combobox', {name: /specialty/i}).as('select');
  });

  it('renders with elements', () => {
    cy.get('@group').should('exist');
    cy.get('@label').should('exist');
    cy.get('@select').should('exist').and('have.value', 'All');
  });

  it('selects option with value 1', () => {
    cy.get('@select').select(1);
    cy.get('@select').should('exist').and('have.value', 1);
  });
});
