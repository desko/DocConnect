import {Link as ReactRouterLink} from 'react-router-dom';
import {ReactComponent as LogoSVG} from '../../assets/logo.svg';
import {Link as ChakraLink, Text} from '@chakra-ui/react';
import {HOME_PAGE} from '../../common/routes';
import {LOGO_TITLE} from '../../common/constants';

const Logo = () => {
  return (
    <ChakraLink as={ReactRouterLink} to={HOME_PAGE}
      display='inline-flex'
      gap='1.2rem'
      alignItems='center'
      color='red.400'
      userSelect='none'
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Text
        as='span'
        color='red.400'
      >
        <LogoSVG></LogoSVG>
      </Text>

      <Text
        as='span'
        fontSize='2.4rem'
        fontWeight='400'
        color='white'
      >{LOGO_TITLE}</Text>
    </ChakraLink>
  );
};

export default Logo;
