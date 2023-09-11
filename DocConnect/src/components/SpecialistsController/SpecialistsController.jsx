import {Box, Grid, GridItem, Spinner, Text} from '@chakra-ui/react';
import SearchSpecialists from '../SearchSpecialists/SearchSpecialists';
import {useEffect, useCallback, useState, useRef} from 'react';
import Card from '../Card/Card';
import CardContentSpecialist from '../CardContentSpecialist/CardContentSpecialist';
import {useSearchParams} from 'react-router-dom';
import {fetchSpecialists} from '../../services/servicesSpecialists';
import {fetchSpecialties} from '../../services/servicesSpecialties';
import {useDispatch, useSelector} from 'react-redux';
import Pagination from '../Pagination/Pagination';

const SpecialistsController = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [specialists, setSpecialists] = useState([]);
  const [cityValue, setCityValue] = useState('');
  const [city, setCity] = useState(null);
  const [nameValue, setNameValue] = useState('');
  const [name, setName] = useState(null);
  const [specialty, setSpecialty] = useState(Number(searchParams.get('specialtyId')) || '');
  const [changed, setChanged] = useState(!!Number(searchParams.get('specialtyId')) || false);
  const [currentPage, setCurrentPage] = useState(1);
  const [specialistsPerPage] = useState(9);

  useEffect(() => {
    setSearchParams({
      specialtyId: specialty || '',
    });
    setCurrentPage(1);
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
      setLoading(false);
    };

    if (changed) {
      setLoading(true);
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

  // Pagination
  const indexOfLastSpecialist = currentPage * specialistsPerPage;
  const indexOfFirstSpecialist = indexOfLastSpecialist - specialistsPerPage;
  const currentSpecialists = specialists?.slice(indexOfFirstSpecialist, indexOfLastSpecialist);

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

      {
        loading &&
        <Spinner color='red.400' size='xl' display='block' mt='3.6rem' mx='auto' />
      }

      {
        !loading && <Grid
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
            currentSpecialists?.map((specialist, index) => {
              // console.log(specialist);
              return <GridItem key={specialist.id}>
                <Card
                  Component={CardContentSpecialist}
                  imageUrl={specialist.imageUrl}
                  content={specialist}
                  link={`${specialist.id}`}
                />
              </GridItem>;
            })
          }
        </Grid>
      }

      {
        specialists?.length > 0 && specialists.length > specialistsPerPage ?
        <Pagination
          itemsPerPage={specialistsPerPage}
          totalItems={specialists.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        /> : null
      }

      {
        !loading && changed && specialists?.length === 0 && <Text textAlign='center'>No results found</Text>
      }

    </Box>
  );
};

export default SpecialistsController;
