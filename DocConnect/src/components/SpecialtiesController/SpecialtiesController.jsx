import {useDispatch, useSelector} from 'react-redux';
import {fetchSpecialties} from '../../services/servicesSpecialties';
import {useEffect} from 'react';

import {Grid, GridItem, Spinner, AlertIcon, Alert} from '@chakra-ui/react';
import Card from '../Card/Card';
import CardContent from '../CardContent/CardContent';

import {sortAlphabetically} from '../../store/features/specialtiesSlice';

const SpecialtiesController = () => {
  const dispatch = useDispatch();
  const {specialties, status} = useSelector((store) => store.specialties);

  useEffect(() =>{
    if (status === 'idle') {
      dispatch(fetchSpecialties());
      dispatch(sortAlphabetically());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return (<Spinner color='red.400' size='xl' display='block' mx='auto' /> );
  }
  if (status === 'failed') {
    return (
      <Alert status='error'>
        <AlertIcon />There was an error processing your request
      </Alert> );
  }

  return (
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
      pt='1.6rem'
    >
      {
        specialties.map((el) => {
          return (
            <GridItem key={el.id}>
              <Card imageUrl={el.imageUrl} content={el.name} Component={CardContent} />
            </GridItem>
          );
        })
      }
    </Grid>
  );
};

export default SpecialtiesController;
