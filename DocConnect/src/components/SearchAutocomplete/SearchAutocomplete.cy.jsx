import SearchAutocomplete from './SearchAutocomplete';
import '@testing-library/cypress/add-commands';
import {BrowserRouter} from 'react-router-dom';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';
import {Provider} from 'react-redux';
import {store} from '../../store/store';
import {useState} from 'react';

describe('<SearchAutocomplete />', () => {
  const mockResponseObject = [
    {
      value: 2000000057,
      imageUrl: 'images/generated_57.png',
      specialityName: 'Oncology',
      name: 'Daniel Patterson',
      lastName: 'Patterson',
      address: '',
      rating: 0,
    },
    {
      value: 2000000031,
      imageUrl: 'images/generated_31.png',
      specialityName: 'Gastroenterology',
      name: 'Daniel Robertson',
      lastName: 'Robertson',
      address: '',
      rating: 0,
    },
    {
      value: 2000000016,
      imageUrl: 'images/generated_16.png',
      specialityName: 'Urology',
      name: 'Daniel Hebert',
      lastName: 'Hebert',
      address: '',
      rating: 0,
    },
    {
      value: 2000000043,
      imageUrl: 'images/generated_43.png',
      specialityName: 'Urology',
      name: 'Daniel Burke',
      lastName: 'Burke',
      address: '',
      rating: 0,
    },
  ];

  const MockWrapper = () => {
    const fetcher = async () => {
      const res = new Promise((res, rej) => {
        setTimeout(() => res(mockResponseObject), 300);
      });
      return await res;
    };
    const [value, setValue] = useState('');
    const [selected, setSelected] = useState(null);
    const mockData = {
      label: 'Specialist Name',
      placeholder: 'Search Specialist',
    };

    return (
      <>
        <SearchAutocomplete
          label={mockData.label}
          fetcher={fetcher}
          value={value}
          setValue={setValue}
          setSelected={setSelected}
          selected={selected}
          placeholder={mockData.placeholder}
        />
        <div
          role='group'
          aria-label='unfocus'
          style={{
            padding: '2rem',
            backgroundColor: 'var(--chakra-colors-red-500)',
          }}
        ></div>
      </>
    );
  };

  beforeEach(() => {
    cy.mount(
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <BrowserRouter>
              <MockWrapper />
            </BrowserRouter>
          </ChakraProvider>
        </Provider>,
    );
    cy.findByRole('textbox', {name: /specialist name/i}).as('input');
    cy.findByText(/specialist name/i).as('label');
  });

  it('renders search elements', () => {
    cy.get('@input').should('exist');
    cy.get('@label').should('exist');
  });

  it('types into searchbar', () => {
    cy.get('@input').type('Dan');
    cy.get('@input').should('have.value', 'Dan');
    // eslint-disable-next-line max-len
    cy.findByRole('group', {name: /specialist name/i}).as('group').get('ul').as('dropdown').should('exist').and('be.visible');
    cy.findByRole('button', {name: /daniel patterson/i}).should('exist').and('be.visible');
    cy.findByRole('button', {name: /daniel robertson/i}).should('exist').and('be.visible');
    cy.findByRole('button', {name: /daniel hebert/i}).should('exist').and('be.visible');
    cy.findByRole('button', {name: /daniel burke/i}).should('exist').and('be.visible');

    cy.findByRole('group', {name: /unfocus/i}).click({force: true});
    cy.findByRole('button', {name: /daniel patterson/i}).should('exist').and('not.be.visible');
    cy.findByRole('button', {name: /daniel robertson/i}).should('exist').and('not.be.visible');
    cy.findByRole('button', {name: /daniel hebert/i}).should('exist').and('not.be.visible');
    cy.findByRole('button', {name: /daniel burke/i}).should('exist').and('not.be.visible');
  });

  it('types into searchbar and selects option, clears option from button', () => {
    cy.get('@input').type('Dan');
    cy.get('@input').should('have.value', 'Dan');
    // eslint-disable-next-line max-len
    cy.findByRole('group', {name: /specialist name/i}).as('group').get('ul').as('dropdown').should('exist').and('be.visible');
    cy.findByRole('button', {name: /daniel patterson/i}).should('exist').and('be.visible');
    cy.findByRole('button', {name: /daniel robertson/i}).should('exist').and('be.visible');
    cy.findByRole('button', {name: /daniel hebert/i}).should('exist').and('be.visible');
    cy.findByRole('button', {name: /daniel burke/i}).should('exist').and('be.visible').click();

    // cy.findByRole('group', {name: /unfocus/i}).click({force: true});
    cy.findByRole('button', {name: /daniel patterson/i}).should('exist').and('not.be.visible');
    cy.findByRole('button', {name: /daniel robertson/i}).should('exist').and('not.be.visible');
    cy.findByRole('button', {name: /daniel hebert/i}).should('exist').and('not.be.visible');
    cy.findByRole('button', {name: /daniel burke/i}).should('exist').and('not.be.visible');
    cy.findByRole('status', {name: /selected/i}).should('exist').as('selected');
    cy.get('@selected').find('button').as('clearButton').click();
    cy.get('@selected').should('not.exist');
    cy.get('@input').should('have.value', '');
  });
});
