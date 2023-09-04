import {FormControl, FormLabel, Select as ChakraSelect} from '@chakra-ui/react';

const Select = ({label, setSelected, value, options}) => {
  const selectHandler = (e) => {
    const value = Number(e.target.value) || null;
    setSelected(options.find((specialty) => specialty.id === value)?.id || '');
  };

  return (
    <FormControl
      aria-label={label}
    >
      <FormLabel
        variant='custom'
      >
        {label}
      </FormLabel>

      <ChakraSelect
        value={value}
        onChange={selectHandler}
        variant='custom'
      >
        <option value=''>All</option>

        {
          options.map((option) => {
            return <option
              key={option.id}
              value={option.id}
            >{option.name}</option>;
          })
        }
      </ChakraSelect>
    </FormControl>
  );
};

export default Select;
