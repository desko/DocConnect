import {Link as ChakraLink} from '@chakra-ui/react';
import {HOME_PAGE} from '../common/routes';
import SectionWave from '../components/SectionWave/SectionWave';
import {Link as ReactRouterLink} from 'react-router-dom';

const NotFound = () => {
  return (
    <SectionWave title='Not Found'>
      <ChakraLink
        as={ReactRouterLink}
        to={HOME_PAGE}
        alignSelf='flex-start'
        variant='custom'
      >Back to Home</ChakraLink>
    </SectionWave>
  );
};

export default NotFound;
