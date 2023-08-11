import {Box, Flex, Text} from '@chakra-ui/react';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import {useHeaderHeight} from '../../hooks/useHeaderHeight';
import Btn from '../Btn/Btn';
import {useLocation, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const location = useLocation();
  const {headerRef} = useHeaderHeight();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
  }, [location]);

  return (
    <Box
      role='group'
      as='header'
      position='fixed'
      isolation='isolate'
      zIndex='100'
      top='0'
      left='0'
      w='100%'
      py='1.7rem'
      bgColor='red.1000'
      color='lavender.400'
      ref={headerRef}
      data-checked={active || null}
      _active={{

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
            display={{
              base: 'flex',
              lg: 'block',
            }}
            flexDirection={{
              base: 'column-reverse',
              lg: 'initial',
            }}
            justifyContent={{
              base: 'flex-end',
              lg: 'initial',
            }}
            gap={{
              base: '2rem',
              lg: 'initial',
            }}
            position={{
              base: 'absolute',
              lg: 'static',
            }}
            width={{
              base: '100%',
              lg: 'auto',
            }}
            top={{
              base: 'var(--header-height)',
              lg: 'auto',
            }}
            transition={{
              base: 'opacity .4s',
              lg: '0',
            }}
            left={{
              base: '0',
              lg: 'auto',
            }}
            bottom={{
              base: 'calc((100vh - var(--header-height)) * -1)',
              lg: 'auto',
            }}
            opacity={{
              base: '0',
              lg: 'none',
            }}
            pointerEvents={{
              base: 'none',
              lg: 'all',
            }}
            zIndex={{
              base: '-1',
              lg: 'initial',
            }}
            bgColor={{
              base: 'red.1000',
              lg: 'transparent',
            }}
            padding={{
              base: '4rem 2rem',
              lg: '0',
            }}
            ml={{
              base: '0',
              lg: 'auto',
            }}
            _groupChecked={{
              opacity: {
                base: '1',
                lg: 'none',
              },
              pointerEvents: 'all',
            }}
          >
            <Navigation
              styleProps={{
                position: {
                  base: 'static',
                  lg: 'absolute',
                },
                top: '50%',
                left: '50%',
                transform: {
                  base: 'none',
                  lg: 'translate(-50%, -50%)',
                },
              }}
            />

            <Box
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
          </Box>

          <Btn
            customProps={{
              variant: 'hamburger',
              onClick: () => {
                setActive(!active);
              },
            }}
          >
            <Text
              as='span'
              position='absolute'
              left='0'
              top='50%'
              transform='translateY(-50%)'
              height='.2rem'
              width='100%'
              bgColor='currentColor'
              transition='opacity .4s'
              _groupChecked={{
                opacity: '0',
              }}
            ></Text>
          </Btn>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
