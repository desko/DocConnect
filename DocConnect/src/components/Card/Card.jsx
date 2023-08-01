import {Card as CardChakra, CardBody, Box, Image} from '@chakra-ui/react';

const Card = ({Component, imageUrl, content}) => {
  return (
    <CardChakra
      role='group'
      variant='custom'
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
          src={imageUrl}
          alt={content}
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
    </CardChakra>
  );
};

export default Card;
