import {useSelector, useDispatch} from 'react-redux';
import {selectAllSpecialties, fetchSpecialties} from '../../store/features/specialtiesSlice';
import {useEffect} from 'react';

import {Grid, GridItem} from '@chakra-ui/react';
import Card from '../Card/Card';
import CardContent from '../CardContent/CardContent';

const SpecialtiesController = () => {
  const dispatch = useDispatch();
  const specialties = useSelector(selectAllSpecialties);
  const specialtiesStatus = useSelector((state) => state.specialties.status);

  useEffect(() =>{
    if (specialtiesStatus === 'idle') {
      dispatch(fetchSpecialties());
    }
  }, [specialtiesStatus, dispatch]);


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
              <Card imageUrl={el.imgUrl} content={el.specialtyName} Component={CardContent} />
            </GridItem>
          );
        })
      }
    </Grid>
  );
};

export default SpecialtiesController;
