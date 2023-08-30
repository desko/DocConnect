import {Select} from '@chakra-ui/react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSpecialties} from '../../services/servicesSpecialties';
import {useEffect} from 'react';

const DynamicSelect = ({setSelected}) => {
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
    <Select onChange={(e) => selectHandler(e)}>
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
  );
};

export default DynamicSelect;
