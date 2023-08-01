import {useSelector, useDispatch} from 'react-redux';
import {fetchSpecialties} from '../../store/features/specialtiesSlice';
import {useEffect} from 'react';

import {Grid, GridItem, Spinner, AlertIcon, Alert} from '@chakra-ui/react';
import Card from '../Card/Card';
import CardContent from '../CardContent/CardContent';

const SpecialtiesController = () => {
  const dispatch = useDispatch();
  const {specialties, status} = useSelector((store) => store.specialties);

  console.log(specialties);

  useEffect(() =>{
    if (status === 'idle') {
      dispatch(fetchSpecialties());
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
      templateColumns='repeat(3, 1fr)'
      gap='5rem 6.2rem'
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
