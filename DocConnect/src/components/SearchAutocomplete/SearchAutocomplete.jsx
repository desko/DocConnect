import {Box, Button, Flex, FormControl, FormLabel, Input} from '@chakra-ui/react';
import {useEffect, useRef, useState} from 'react';
import {
  autocompleteCover,
  autocompleteCoverButton,
  autocompleteDropdown,
  autocompleteDropdownItem,
} from './SearchAutocomplete.theme';
import useClickOutsideHandler from '../../hooks/useClickOutsideHandler';

const SearchAutocomplete = ({label, fetcher, value, setValue, setSelected, selected, placeholder}) => {
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const groupRef = useRef(null);
  const inputRef = useRef(null);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (value.length > 2) {
        const response = await fetcher(value);
        setResults(response);
      } else {
        setResults([]);
      }
    };

    fetchData();
  }, [value, setResults, fetcher]);

  // click outside handler
  useClickOutsideHandler(groupRef, () => {
    setOpen(false);
  });

  const selectHandler = (value) => {
    setSelected(results.find((el) => el.value === value));
    inputRef.current.blur();
    inputRef.current.dispatchEvent(new Event('blur'));
  };

  const clearHandler = () => {
    setSelected(null);
    setValue('');
    setOpen(false);
  };

  return (
    <FormControl
      fontSize='1.6rem'
    >
      <FormLabel
        variant='custom'
      >{label}</FormLabel>

      <Box
        role='group'
        position='relative'
        ref={groupRef}
      >
        <Input
          variant='custom'
          borderColor={value.length ? 'bodyText' : 'quicksilver.400'}
          color={value.length ? 'bodyText' : 'quicksilver.400'}
          ref={inputRef}
          value={value}
          onInput={handleInput}
          placeholder={placeholder}
          bgColor='white'
          _focus={value.length ? {
            borderBottomRadius: '0',
            borderColor: 'bodyText',
            borderBottomColor: 'transparent',
          } : null}
          onFocus={() => {
            setOpen(true);
          }}
        />
        {
          selected !== null &&
          <Flex
            {...autocompleteCover}
          >
            {selected.name}
            <Button
              {...autocompleteCoverButton}
              onClick={clearHandler}
            >X</Button>
          </Flex>
        }

        <Box
          as='ul'
          {...autocompleteDropdown}
          border={value.length ? '.1rem solid' : '0'}
          padding={ value.length ? '1rem' : '0' }
          opacity={open ? '1' : '0'}
          pointerEvents={open ? 'all' : 'none'}
        >
          {
            !!(results?.length) && <Box
              as='li'
              padding='0 .5rem'
            >Please select an option</Box>
          }
          {
            !!results.length && results?.map((el) => {
              return (
                <Box
                  mt='1rem'
                  as='li'
                  key={el.value}
                >
                  <Button
                    {...autocompleteDropdownItem}
                    onClick={() => {
                      setOpen(false);
                      selectHandler(el.value);
                    }}
                  >
                    {el.name}
                  </Button>
                </Box>
              );
            })
          }
        </Box>
      </Box>
    </FormControl>
  );
};

export default SearchAutocomplete;
