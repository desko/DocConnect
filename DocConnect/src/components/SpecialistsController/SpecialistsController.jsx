import {Box, Grid, GridItem} from '@chakra-ui/react';
import SearchSpecialists from '../SearchSpecialists/SearchSpecialists';
import {useState} from 'react';
import Card from '../Card/Card';
import CardContentSpecialist from '../CardContentSpecialist/CardContentSpecialist';

const SpecialistsController = () => {
  const [specialists, setSpecialists] = useState([]);

  return (
    <Box
      aria-label='Specialists'
    >
      <SearchSpecialists setSpecialists={setSpecialists}/>

      <Grid
        templateColumns={
          {
            base: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            lg: 'repeat(3, minmax(0, 1fr))',
          }
        }
        gap={
          {
            base: '2rem',
            md: '2rem 3rem',
            lg: '5rem 6.2rem',
          }
        }
        pt='3.6rem'
      >
        {
          specialists.map((specialist, index) => {
            return <GridItem key={specialist.id}>
              <Card
                Component={CardContentSpecialist}
                imageUrl={specialist.imageUrl}
                imagePrefix='https://cdntestredhf30zf.azureedge.net/'
                content={specialist}
              />
            </GridItem>;
          })
        }
      </Grid>
    </Box>
  );
};

export default SpecialistsController;
