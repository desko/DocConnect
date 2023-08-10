import {Link} from 'react-router-dom';
import {ReactComponent as LogoSVG} from '../../assets/logo.svg';
import {Text} from '@chakra-ui/react';

const Logo = () => {
  return (
    <Link to='/' style={{
      display: 'inline-flex',
      gap: '1.2rem',
      alignItems: 'center',
      color: '--chakra-colors-red-400',
    }}>
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
      >DocConnect</Text>
    </Link>
  );
};

export default Logo;
