import {Box, Grid, GridItem} from '@chakra-ui/react';
import SearchSpecialists from '../SearchSpecialists/SearchSpecialists';
import {useEffect, useCallback, useState, useRef} from 'react';
import Card from '../Card/Card';
import CardContentSpecialist from '../CardContentSpecialist/CardContentSpecialist';
import {useSearchParams} from 'react-router-dom';
import {fetchSpecialists} from '../../services/servicesSpecialists';
import {fetchSpecialties} from '../../services/servicesSpecialties';
import {useDispatch, useSelector} from 'react-redux';

const SpecialistsController = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const [specialists, setSpecialists] = useState([]);
  const [cityValue, setCityValue] = useState('');
  const [city, setCity] = useState(null);
  const [nameValue, setNameValue] = useState('');
  const [name, setName] = useState(null);
  const [specialty, setSpecialty] = useState(Number(searchParams.get('specialtyId')) || '');
  const [changed, setChanged] = useState(!!Number(searchParams.get('specialtyId')) || false);

  useEffect(() => {
    setSearchParams({
      specialtyId: specialty || '',
    });
  }, [specialty, setSearchParams]);

  const debounceTimer = useRef(null);
  const debounce = useCallback((callback, time = 300) => {
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(callback, time);
  }, []);

  // fetch specialist
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSpecialists(
          city?.value,
          specialty,
          (name?.name.length > 2 ? name?.name : '') || (nameValue.trim().length > 2 ? nameValue.trim() : ''),
      );

      setSpecialists(result);
    };

    if (changed) {
      debounce(fetchData);
    }
  }, [city, name, specialty, setSpecialists, nameValue, changed, debounce]);

  // fetch specialties
  const {specialties} = useSelector((store) => store.specialties);

  useEffect(() => {
    if (!specialties?.length) {
      dispatch(fetchSpecialties());
    }
  }, [dispatch, specialties]);


  return (
    <Box
      aria-label='Specialists'
    >
      <SearchSpecialists
        specialtyState={{
          specialty,
          setSpecialty,
        }}
        cityState={{
          city,
          setCity,
        }}
        cityValueState={{
          cityValue,
          setCityValue,
        }}
        nameState={{
          name, setName,
        }}
        nameValueState={{
          nameValue,
          setNameValue,
        }}
        selectOptions={specialties}
        setChanged={setChanged}
      />

      <Grid
        isolation='isolate'
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
