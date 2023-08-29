import {Box} from '@chakra-ui/react';
import {searchSpecialists, searchCities} from '../../services/servicesSpecialists';
import SearchAutocomplete from '../SearchAutocomplete/SearchAutocomplete.jsx';

const SearchSpecialists = () => {
  return (
    <Box>
      <SearchAutocomplete
        fetcher={searchCities}
      />
      <SearchAutocomplete
        fetcher={searchSpecialists}
      />
    </Box>
  );
};

export default SearchSpecialists;
