import {GridItem, Grid} from '@chakra-ui/react';
import {searchSpecialists, searchCities} from '../../services/servicesSpecialists';
import SearchAutocomplete from '../SearchAutocomplete/SearchAutocomplete.jsx';
import Select from '../Select/Select';
import {useCallback, useEffect, useRef} from 'react';

const SearchSpecialists = ({
  specialtyState,
  cityState,
  cityValueState,
  nameState,
  nameValueState,
  selectOptions,
  setChanged,
}) => {
  const {cityValue, setCityValue} = cityValueState;
  const {city, setCity} = cityState;
  const {nameValue, setNameValue} = nameValueState;
  const {name, setName} = nameState;
  const {specialty, setSpecialty} = specialtyState;
  const groupRef = useRef(null);

  const changeHandler = useCallback((e) => {
    setChanged(true);
  }, [setChanged]);

  useEffect(() => {
    groupRef.current.addEventListener('customchange', changeHandler);
  }, [groupRef, changeHandler]);

  return (
    <Grid
      ref={groupRef}
      onChange={changeHandler}
      templateColumns={{
        base: 'repeat(1, minmax(0, 1fr))',
        md: 'repeat(3, minmax(0, 1fr))',
        lg: 'repeat(4, minmax(0, 1fr))',
      }}
      gap={{
        base: '1rem',
        md: '3rem',
      }}
    >
      <GridItem>
        <SearchAutocomplete
          label='Specialist Name'
          fetcher={searchSpecialists}
          value={nameValue}
          setValue={setNameValue}
          setSelected={setName}
          selected={name}
          placeholder='Search Specialist'
        />
      </GridItem>

      <GridItem>
        <Select
          options={selectOptions}
          value={specialty}
          setSelected={setSpecialty}
          label='Specialty'
        />
      </GridItem>

      <GridItem>
        <SearchAutocomplete
          label='City'
          fetcher={searchCities}
          value={cityValue}
          setValue={setCityValue}
          setSelected={setCity}
          selected={city}
          placeholder='Search City'
        />
      </GridItem>
    </Grid>
  );
};

export default SearchSpecialists;
