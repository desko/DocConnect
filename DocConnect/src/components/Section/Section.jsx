import {Box, Heading} from '@chakra-ui/react';
import Container from '../Container/Container';

const Section = ({title, children}) => {
  return (
    <Box
      as='section'
      py='6.2rem'
      aria-label='Section'
    >
      <Container>
        <Box
          as='header'
          pb='2rem'
        >
          <Heading
            as='h2'
            size='xl'
          >{title}</Heading>
        </Box>

        <Box>
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default Section;
