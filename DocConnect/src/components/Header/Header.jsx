import {Box, Flex, Text, Link as ChakraLink} from '@chakra-ui/react';
import {NavLink as ReactRouterLink} from 'react-router-dom';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import {useHeaderHeight} from '../../hooks/useHeaderHeight';
import Btn from '../Btn/Btn';
import {useLocation, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Navigation from '../Navigation/Navigation';
import {headerStyle, headerInnerStyle, hamburgerButtonChild} from './Header.theme';
import {LOGIN_PAGE, SIGNUP_PAGE} from '../../common/routes';


const Header = () => {
  const location = useLocation();
  const {headerRef} = useHeaderHeight();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
  }, [location]);

  useEffect(() => {
    document.documentElement.classList.toggle('header-active', active);
  }, [active]);

  return (
    <Box
      role='group'
      as='header'
      aria-label='Header'
      ref={headerRef}
      data-checked={active || null}
      {...headerStyle}
    >
      <Container>
        <Flex
          justifyContent='space-between'
          alignItems='center'
        >
          <Box
          >
            <Logo></Logo>
          </Box>

          <Box
            {...headerInnerStyle}
          >
            <Navigation/>

            <Flex
              alignItems='center'
              gap='3rem'
            >
              <ChakraLink
                as={ReactRouterLink}
                to={LOGIN_PAGE}
                variant='navLink'
              >Login</ChakraLink>
              <Btn
                text='Sign Up'
                customProps={{
                  onClick: () => {
                    navigate(SIGNUP_PAGE);
                  },
                  variant: 'customOutline',
                }}
              />
            </Flex>
          </Box>

          <Btn
            customProps={{
              'variant': 'hamburger',
              'onClick': () => {
                setActive(!active);
              },
              'aria-label': 'Menu Button',
            }}
          >
            <Text
              as='span'
              {...hamburgerButtonChild}
            ></Text>
          </Btn>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
