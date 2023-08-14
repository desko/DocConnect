import {Box} from '@chakra-ui/react';

const BoxCard = ({children}) => {
  return (
    <Box
      bgColor='offwhite.400'
      p={{
        base: '2rem 3rem',
        md: '4rem 7rem',
      }}
      maxW='48rem'
      w='100%'
      mx='auto'
      boxShadow='0 .4rem .4rem rgba(0,0,0, .25)'
      borderRadius='1.5rem'
    >
      {children}
    </Box>
  );
};

export default BoxCard;
