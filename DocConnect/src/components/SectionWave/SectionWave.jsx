import {Box, Heading} from '@chakra-ui/react';
import Container from '../Container/Container';
import Waves from '../Waves/Waves';

const SectionWave = ({title = '', children}) => {
  return (
    <Box
      as='section'
      py='8rem'
      aria-label='Section'
      position='relative'
      minH='100vh'
      display='flex'
      alignItems='center'
    >
      <Container
        styleProps={{
          position: 'relative',
          zIndex: '2',
          minHeight: '100%',
        }}
      >
        {
          title !== '' && <Box
            as='header'
            pb='2rem'
          >
            <Heading
              as='h2'
              size='xl'
            >{title}</Heading>
          </Box>
        }

        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          {children}
        </Box>
      </Container>

      <Box
        as='figure'
        position='absolute'
        bottom='0'
        left='0'
        w='100%'
        fontSize='0'
      >
        <Waves colorStart='var(--chakra-colors-red-400)' colorEnd='var(--chakra-colors-red-500)' />
        <Box
          bgGradient='linear(to-r, red.400, red.500)'
          pb='3rem'
          borderTop='.2rem solid white'
        ></Box>
      </Box>
    </Box>
  );
};

export default SectionWave;
