import {Box, Button, Flex, Input} from '@chakra-ui/react';
import {useEffect, useRef, useState} from 'react';

const SearchAutocomplete = ({fetcher}) => {
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
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

  const selectHandler = (value) => {
    setSelected(results.find((el) => el.value === value));
    inputRef.current.blur();
    inputRef.current.dispatchEvent(new Event('blur'));
  };

  const clearHandler = () => {
    setSelected(null);
    setValue('');
    inputRef.current.focus();
  };

  return (
    <Box
      position='relative'
      role='group'
    >
      <Input
        ref={inputRef}
        value={value}
        onInput={handleInput}
        onFocus={() => {
          setOpen(true);
        }}
        onBlur={() => {
          if (value === '') setOpen(false);
        }}
      />
      {
        selected !== null &&
        <Flex
          position='absolute'
          top='0'
          left='0'
          width='100%'
          height='100%'
          bgColor='white'
          justifyContent='space-between'
        >
          {selected.name}
          <Button
            onClick={clearHandler}
          >X</Button>
        </Flex>
      }

      <Box
        as='ul'
        position='absolute'
        top='100%'
        left='0'
        width='100%'
        maxH='30rem'
        overflowY='auto'
        border='.1rem solid'
        borderTop='0'
        borderColor='currentColor'
        bgColor='white'
        transition='opacity .4s'
        opacity={open ? '1' : '0'}
        pointerEvents={open ? 'all' : 'none'}
      >
        <li>Please select an option</li>
        {
          !!results.length && results?.map((el) => {
            return (
              <li key={el.value}>
                <Button onClick={() => {
                  setOpen(false);
                  selectHandler(el.value);
                }}>{el.name}</Button>
              </li>
            );
          })
        }
      </Box>
    </Box>
  );
};

export default SearchAutocomplete;
