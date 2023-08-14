import {Box, Flex, Link as ChakraLink} from '@chakra-ui/react';
import {NavLink as ReactRouterLink} from 'react-router-dom';
import {NAV_LINKS} from '../../common/constants';
import {navigationStyle} from './Navigation.theme';


const Navigation = ({styleProps = {}}) => {
  return (
    <Box
      as='nav'
      {...navigationStyle}
      {...styleProps}
      aria-label='Main Navigation'
    >
      <Flex
        as='ul'
        listStyleType='none'
        gap={{
          base: '1rem',
          lg: '4rem',
        }}
        flexDirection={{
          base: 'column',
          lg: 'row',
        }}
      >
        {
          NAV_LINKS.map((link, index) => {
            return (<li key={link.name + index}>
              <ChakraLink
                as={ReactRouterLink}
                to={link.url}
                variant='navLink'
              >{link.name}</ChakraLink>
            </li>);
          })
        }
      </Flex>
    </Box>
  );
};

export default Navigation;
