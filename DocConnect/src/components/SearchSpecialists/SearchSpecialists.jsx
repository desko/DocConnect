import {GridItem, Grid} from '@chakra-ui/react';
import {searchSpecialists, searchCities} from '../../services/servicesSpecialists';
import SearchAutocomplete from '../SearchAutocomplete/SearchAutocomplete.jsx';
import {fetchSpecialists} from '../../services/servicesSpecialists';
import {useEffect, useState} from 'react';
import DynamicSelect from '../DynamicSelect/DynamicSelect';

const SearchSpecialists = ({setSpecialists}) => {
  const [cityValue, setCityValue] = useState('');
  const [city, setCity] = useState(null);
  const [nameValue, setNameValue] = useState('');
  const [name, setName] = useState(null);
  const [speciality, setSpeciality] = useState(null);

  useEffect(() =>{
    if (city !== null || (name !== null || nameValue.length > 2) || speciality !== null) {
      const fetchData = async () => {
        const result = await fetchSpecialists(city?.value, speciality?.id, name?.name || nameValue );
        setSpecialists(result);
      };
      fetchData();
    }
  }, [city, name, speciality, setSpecialists, nameValue]);

  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, minmax(0, 1fr))',
        md: 'repeat(3, minmax(0, 1fr))',
        lg: 'repeat(4, minmax(0, 1fr))',
      }}
      gap={{
        base: '1rem',
        md: '3rem',
      }}
    >
      <GridItem>
        <SearchAutocomplete
          label='Specialist Name'
          fetcher={searchSpecialists}
          value={nameValue}
          setValue={setNameValue}
          setSelected={setName}
          selected={name}
          placeholder='Search Specialist'
        />
      </GridItem>

      <GridItem>
        <DynamicSelect
          setSelected={setSpeciality}
          label='Specialty'
        />
      </GridItem>

      <GridItem>
        <SearchAutocomplete
          label='City'
          fetcher={searchCities}
          value={cityValue}
          setValue={setCityValue}
          setSelected={setCity}
          selected={city}
          placeholder='Search City'
        />
      </GridItem>
    </Grid>
  );
};

export default SearchSpecialists;
