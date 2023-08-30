import {Box, Button, Flex, Input} from '@chakra-ui/react';
import {useEffect, useRef, useState} from 'react';

const SearchAutocomplete = ({fetcher, setSelected, selected}) => {
  const [results, setResults] = useState([]);
  // const [selected, setSelected] = useState(null);
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
      role='group'
      position='relative'
      fontSize='1.6rem'
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
        variant='custom'
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
          alignItems='center'
          padding='0 1rem'
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
        zIndex='2'
        top='100%'
        left='0'
        width='100%'
        maxH='30rem'
        overflowY='auto'
        border='.1rem solid'
        borderTop='0'
        borderColor='currentColor'
        bgColor='white'
        padding='1rem'
        transition='opacity .4s'
        opacity={open ? '1' : '0'}
        pointerEvents={open ? 'all' : 'none'}
      >
        <Box
          as='li'
        >Please select an option</Box>
        {
          !!results.length && results?.map((el) => {
            return (
              <Box
                mt='1rem'
                as='li'
                key={el.value}
              >
                <Button
                  width='100%'
                  height='auto'
                  padding='.5rem'
                  textAlign='left'
                  justifyContent='flex-start'
                  fontSize='inherit'
                  bgColor='transparent'
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
  );
};

export default SearchAutocomplete;
