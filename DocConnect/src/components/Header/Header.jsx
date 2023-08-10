import {Box, Flex} from '@chakra-ui/react';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import {useHeaderHeight} from '../../hooks/useHeaderHeight';
import Btn from '../Btn/Btn';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';

const Header = () => {
  const {headerRef} = useHeaderHeight();
  const navigate = useNavigate();
  const [active, setActive] = useState(true);

  return (
    <Box
      role='group'
      as='header'
      position='fixed'
      zIndex='100'
      top='0'
      left='0'
      w='100%'
      py='1.7rem'
      bgColor='red.1000'
      color='lavender.400'
      ref={headerRef}
      data-active={active}
      _active={{
        bgColor: 'green.400',
      }}
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
            as='aside'
          >
            <Btn
              text='Sign Up'
              customProps={{
                onClick: () => {
                  navigate('/signup');
                },
                variant: 'customOutline',
              }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
