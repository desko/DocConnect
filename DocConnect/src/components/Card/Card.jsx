import {Card as CardChakra, CardBody, Box, Image, Link as ChakraLink} from '@chakra-ui/react';
import {Link as ReactRouterLink} from 'react-router-dom';
const Card = ({Component, imageUrl, content, imagePrefix = '', link='#'}) => {
  return (
    <CardChakra
      role='group'
      variant='custom'
      aria-label='Card'
      position='relative'
    >
      <Box
        as='figure'
        position='relative'
        pb='89.63%'
        overflow='hidden'
        _before={
          {
            content: '""',
            position: 'absolute',
            zIndex: '1',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '7rem',
            bgGradient: 'linear(to-b, transparent, offwhite.400)',
          }
        }
      >
        <Image
          src={imagePrefix+imageUrl}
          alt={typeof content !== 'string' ? `${content?.firstName} ${content?.lastName}` : content}
          position='absolute'
          inset='0'
          w='100%'
          h='100%'
          objectFit='cover'
          objectPosition='center center'
          transition='transform .4s'
          _groupHover={
            {
              transform: 'scale(1.05)',
            }
          }
        />
      </Box>
      <CardBody>
        <Component content={content} />
      </CardBody>
      <ChakraLink
        aria-label={typeof content !== 'string' ? `${content?.firstName} ${content?.lastName}` : content}
        as={ReactRouterLink}
        to={link}
        position='absolute'
        zIndex='2'
        top='0'
        left='0'
        width='100%'
        height='100%'
      ></ChakraLink>
    </CardChakra>
  );
};

export default Card;
