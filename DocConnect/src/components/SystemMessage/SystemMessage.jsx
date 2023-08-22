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

          <Text
            as='span'
            color='red.400'
            textDecoration='underline'
            textDecorationColor='currentcolor'
            textDecorationThickness='.2rem'
            textUnderlineOffset='.3rem'
            transition='text-decoration-color .4s'
            _hover={{
              textDecorationColor: 'transparent',
            }}
          >
            {SYSTEM_MESSAGE[type].LOGINLINK ? <ChakraLink
              as={ReactRouterLink}
              to={LOGIN_PAGE}
              variant='custom'
            >Go to the Login page</ChakraLink> :
            ''
            }
          </Text>
        </Text>
      </Box>
    </BoxCard>
  );
};

export default SystemMessage;
