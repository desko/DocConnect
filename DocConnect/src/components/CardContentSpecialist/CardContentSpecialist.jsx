import {Box, Flex, Heading, Text, useDisclosure} from '@chakra-ui/react';
import Btn from '../Btn/Btn';
import {ReactComponent as IconStar} from '../../assets/icon-star.svg';
import {ReactComponent as IconLocation} from '../../assets/icon-location.svg';
import ModalAppointments from '../ModalAppointments/ModalAppointments';

const CardContentSpecialist = ({content}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Flex
      flexDirection='column'
      height='100%'
    >
      <Box
        as='header'
        position='relative'
        pr='4rem'
        pb='2rem'
      >
        <Heading
          as='h3'
          size='md'
        >
          {`${content?.firstName} ${content?.lastName}`}
        </Heading>

        <Text
          aria-label='specialty'
          as='strong'
          color='red.400'
        >
          {content?.specialityName}
        </Text>

        <Flex
          role='group'
          aria-label='rating'
          position='absolute'
          top='1rem'
          right='0'
          gap='.5rem'
        >
          <Box
            as='figure'
            color='yellow.400'
          >
            <IconStar />
          </Box>
          {content?.rating}
        </Flex>
      </Box>

      {
        content?.address !== '' &&
        <Flex
          as='address'
          gap='.5rem'
          pb='2rem'
        >
          <IconLocation style={{
            flex: '0 0 auto',
            marginTop: '.5rem',
          }}/>

          <Text
            as='span'
          >
            {content?.address || null}
          </Text>
        </Flex>
      }

      <Btn
        text='Schedule an Appointment'
        styleProps={{
          width: '100%',
          marginTop: 'auto',
          position: 'relative',
          zIndex: '3',
        }}
        customProps={{
          onClick: onOpen,
        }}
      />

      <ModalAppointments
        isOpen={isOpen}
        handleClose={onClose}
      />
    </Flex>
  );
};

export default CardContentSpecialist;
