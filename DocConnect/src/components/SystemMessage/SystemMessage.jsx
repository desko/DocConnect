import {Box, Heading, Link as ChakraLink, Text} from '@chakra-ui/react';
import BoxCard from '../BoxCard/BoxCard';
import {Link as ReactRouterLink} from 'react-router-dom';
import {LOGIN_PAGE} from '../../common/routes';
import {SYSTEM_MESSAGE} from '../../common/systemMsgConsts';

const SystemMessage = ({type}) => {
  return (
    <BoxCard>
      <Box
        as='header'
        pb='3rem'
      >
        <Heading
          as='h2'
          size='md'
          pb='.5rem'
        >{SYSTEM_MESSAGE[type].HEADING}</Heading>

        <Text
          display='inline-flex'
          gap={{
            base: '.5rem',
            md: '1rem',
          }}
          flexWrap='wrap'
        >
          {SYSTEM_MESSAGE[type].TEXT}
        </Text>

        {SYSTEM_MESSAGE[type].LOGIN_LINK ? <ChakraLink
          as={ReactRouterLink}
          to={LOGIN_PAGE}
          variant='custom'
        >Go to the Login page</ChakraLink> :
        ''
        }
      </Box>
    </BoxCard>
  );
};

export default SystemMessage;
