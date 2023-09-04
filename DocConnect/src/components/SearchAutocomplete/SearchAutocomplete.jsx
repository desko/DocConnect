import {Box, Button, Flex, FormControl, FormLabel, Input} from '@chakra-ui/react';
import {useCallback, useEffect, useRef, useState} from 'react';
import {
  autocompleteCover,
  autocompleteCoverButton,
  autocompleteDropdown,
  autocompleteDropdownItem,
} from './SearchAutocomplete.theme';
import useClickOutsideHandler from '../../hooks/useClickOutsideHandler';

const SearchAutocomplete = ({label, fetcher, value, setValue, setSelected, selected, placeholder}) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const groupRef = useRef(null);
  const inputRef = useRef(null);

  const debounceTimer = useRef(null);
  const debounce = useCallback((callback, time = 300) => {
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(callback, time);
  }, []);

  const handleInput = (e) => {
    setLoading(true);
    setValue(e.target.value);
  };

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

  useEffect(() => {
    const fetchData = async () => {
      if (value.trim().length > 2) {
        const response = await fetcher(value.trim() !== '' ? value.trim() : 'null');
        setResults(response);
      } else {
        setResults([]);
      }
      setLoading(false);
    };

    debounce((fetchData));
  }, [value, setResults, fetcher, debounce]);

  // click outside handler
  useClickOutsideHandler(groupRef, () => {
    setOpen(false);
  });

  return (
    <FormControl
      aria-label={label}
      data-label={label}
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
          autoComplete='off'
          variant='custom'
          borderColor={value.length ? 'bodyText' : 'quicksilver.400'}
          color={value.length ? 'bodyText' : 'quicksilver.400'}
          ref={inputRef}
          value={value}
          onInput={handleInput}
          placeholder={placeholder}
          bgColor='white'
          _focus={value.length && !loading ? {
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
            aria-label='selected'
            role='status'
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
          border={value.length && !loading ? '.1rem solid' : '0'}
          padding={ value.length && !loading ? '1rem' : '0' }
          opacity={open && !loading ? '1' : '0'}
          pointerEvents={open && !loading ? 'all' : 'none'}
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
                      groupRef.current.dispatchEvent(new Event('customchange'));
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
