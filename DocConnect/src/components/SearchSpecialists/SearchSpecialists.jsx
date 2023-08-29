import {Box} from '@chakra-ui/react';
import SearchAutocomplete from '../SearchAutocomplete/SearchAutocomplete';
import {useState} from 'react';
import {searchSpecialists, searchCities} from '../../services/servicesSpecialists';

const SearchSpecialists = () => {
  const [cityValue, setCityValue] = useState('');
  const [citySelectedValue, setCitySelectedValue] = useState('');
  const [specialistValue, setSpecialistValue] = useState('');
  const [specialistSelectedValue, setSpecialistSelectedValue] = useState('');

  const handleInputSpecialist = (value) => {
    if (value.length > 1) {
      setSpecialistValue(value);
    }
  };

  const handleChangeSpecialist = (value) => {
    setSpecialistSelectedValue(value);
  };

  const handleInputCities = (value) => {
    if (value.length > 1) {
      setCityValue(value);
    }
  };

  const handleChangeCities = (value) => {
    setCitySelectedValue(value);
  };

  return (
    <Box>
      <SearchAutocomplete
        inputValue={specialistValue}
        value={specialistSelectedValue}
        handleInput={handleInputSpecialist}
        handleChange={handleChangeSpecialist}
        fetcher={searchSpecialists}
      />

      <SearchAutocomplete
        inputValue={cityValue}
        value={citySelectedValue}
        handleInput={handleInputCities}
        handleChange={handleChangeCities}
        fetcher={searchCities}
      />
    </Box>
  );
};

export default SearchSpecialists;
