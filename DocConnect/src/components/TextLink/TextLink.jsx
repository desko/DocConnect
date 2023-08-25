import {Link as ChakraLink, Text} from '@chakra-ui/react';
import {Link as ReactRouterLink} from 'react-router-dom';

const TextLink = ({text, link}) => {
  return (
    <Text>
      {text}
      <ChakraLink
        as={ReactRouterLink}
        to={link.url}
        variant='custom'
      >{link.text}</ChakraLink>
    </Text>
  );
};

export default TextLink;
