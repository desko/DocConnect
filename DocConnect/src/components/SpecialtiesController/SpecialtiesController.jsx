import {Grid, GridItem} from '@chakra-ui/react';
import Card from '../Card/Card';
import CardContent from '../CardContent/CardContent';

import {useDispatch, useSelector} from 'react-redux';
import {sortAlphabetically} from '../../store/features/specialtiesSlice';

const SpecialtiesController = () => {
  const specialties = useSelector((state) => state.specialties.specialties);
  const dispatch = useDispatch();

  dispatch(sortAlphabetically());


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
              <Card imageUrl={el.imgUrl} content={el.specialtyName} Component={CardContent} />
            </GridItem>
          );
        })
      }
    </Grid>
  );
};

export default SpecialtiesController;
