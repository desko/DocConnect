import {Box, Grid} from '@chakra-ui/react';
import SearchSpecialists from '../SearchSpecialists/SearchSpecialists';
import {useState} from 'react';

const SpecialistsController = () => {
  const [specialists, setSpecialists] = useState([]);

  return (
    <Box
      aria-label='Specialists'
    >
      <SearchSpecialists setSpecialists={setSpecialists}/>

      <Grid>
        {
          specialists.map((specialist) => {
            return <li key={specialist.id}>{specialist.firstName}</li>;
          })
        }
      </Grid>
    </Box>
  );
};

export default SpecialistsController;
