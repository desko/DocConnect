import {Box} from '@chakra-ui/react';
import {searchSpecialists, searchCities} from '../../services/servicesSpecialists';
import SearchAutocomplete from '../SearchAutocomplete/SearchAutocomplete.jsx';
import {fetchSpecialists} from '../../services/servicesSpecialists';
import {useEffect, useState} from 'react';
import DynamicSelect from '../DynamicSelect/DynamicSelect';

const SearchSpecialists = ({setSpecialists}) => {
  const [city, setCity] = useState(null);
  const [name, setName] = useState(null);
  const [speciality, setSpeciality] = useState(null);

  useEffect(() =>{
    if (city !== null || name !== null || speciality !== null) {
      const fetchData = async () => {
        const result = await fetchSpecialists(city?.value, speciality?.id, name?.name );
        setSpecialists(result);
      };
      fetchData();
    }
  }, [city, name, speciality, setSpecialists]);

  return (
    <Box>
      <SearchAutocomplete
        fetcher={searchCities}
        setSelected={setCity}
        selected={city}
      />
      <SearchAutocomplete
        fetcher={searchSpecialists}
        setSelected={setName}
        selected={name}
      />
      <DynamicSelect setSelected={setSpeciality}/>
    </Box>
  );
};

export default SearchSpecialists;
