import {Box, Flex, Heading, Text, useDisclosure} from '@chakra-ui/react';
import Btn from '../Btn/Btn';
import {ReactComponent as IconStar} from '../../assets/icon-star.svg';
import {ReactComponent as IconLocation} from '../../assets/icon-location.svg';
import ModalAppointments from '../ModalAppointments/ModalAppointments';
import {useSelector} from 'react-redux';

const CardContentSpecialist = ({content}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {token} = useSelector((store) => store.user);

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
          {Math.floor(Number(content?.rating) * 10) / 10}
        </Flex>
      </Box>

      {
        content?.address !== '' &&
        <Flex
          as='address'
          alignItems='center'
          gap='.5rem'
          pb='2rem'
        >
          <IconLocation style={{
            flex: '0 0 auto',
          }}/>

          <Text
            as='span'
          >
            {content?.address || null}
          </Text>
        </Flex>
      }

      <Btn
        text={token ? 'Schedule an Appointment' : 'Login to Schedule an Appointment'}
        styleProps={{
          width: '100%',
          marginTop: 'auto',
          position: 'relative',
          zIndex: '3',
        }}
        customProps={{
          onClick: onOpen,
          isDisabled: !token,
        }}
      />

      {
        isOpen && token && <ModalAppointments
          isOpen={isOpen}
          handleClose={onClose}
          doctorId={content.id}
        />
      }
    </Flex>
  );
};

export default CardContentSpecialist;
