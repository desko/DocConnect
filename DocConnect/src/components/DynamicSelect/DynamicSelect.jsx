import {FormControl, FormLabel, Select} from '@chakra-ui/react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSpecialties} from '../../services/servicesSpecialties';
import {useEffect} from 'react';

const DynamicSelect = ({label, setSelected}) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchSpecialties());
  }, [dispatch]);

  const {specialties, status} = useSelector((store) => store.specialties);

  const selectHandler = (e) => {
    const value = Number(e.target.value);
    setSelected(specialties.find((specialty) => specialty.id == value));
  };

  return (
    <FormControl>
      <FormLabel
        variant='custom'
      >{label}</FormLabel>
      <Select
        onChange={(e) => selectHandler(e)}
        variant='custom'
      >
        <option>All</option>
        {
          specialties.map((specialty) => {
            return <option
              key={specialty.id}
              value={specialty.id}
            >{specialty.name}</option>;
          })
        }
      </Select>
    </FormControl>
  );
};

export default DynamicSelect;
