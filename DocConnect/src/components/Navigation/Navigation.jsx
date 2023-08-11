import {Box, Flex} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

const links = [
  {
    name: 'Specialties',
    url: '/specialties',
  },
  {
    name: 'Specialists',
    url: '/specialists',
  },
  {
    name: 'Appointments',
    url: '/appointments',
  },
];

const Navigation = ({styleProps}) => {
  return (
    <Box
      as='nav'
      {...styleProps}
    >
      <Flex
        as='ul'
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
          links.map((link, index) => {
            return (<li key={link.name + index}>
              <Link to={link.url}>{link.name}</Link>
            </li>);
          })
        }
      </Flex>
    </Box>
  );
};

export default Navigation;
