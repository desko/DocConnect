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
      id: 2000000057,
      imageUrl: 'images/generated_57.png',
      specialityName: 'Oncology',
      firstName: 'Daniel',
      lastName: 'Patterson',
      address: '',
      rating: 0,
    },
    {
      id: 2000000031,
      imageUrl: 'images/generated_31.png',
      specialityName: 'Gastroenterology',
      firstName: 'Daniel',
      lastName: 'Robertson',
      address: '',
      rating: 0,
    },
    {
      id: 2000000016,
      imageUrl: 'images/generated_16.png',
      specialityName: 'Urology',
      firstName: 'Daniel',
      lastName: 'Hebert',
      address: '',
      rating: 0,
    },
    {
      id: 2000000043,
      imageUrl: 'images/generated_43.png',
      specialityName: 'Urology',
      firstName: 'Daniel',
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
      console.log(res);
      return await res;
    };
    const [value, setValue] = useState('');
    const [selected, setSelected] = useState(null);
    const mockData = {
      label: 'Specialist Name',
      placeholder: 'Search Specialist',
    };

    return (
      <SearchAutocomplete
        label={mockData.label}
        fetcher={fetcher}
        value={value}
        setValue={setValue}
        setSelected={setSelected}
        selected={selected}
        placeholder={mockData.placeholder}
      />
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
  });
});
