import {Box, Heading, Text} from '@chakra-ui/react';
import Btn from '../Btn/Btn';

const CardContentSpecialist = ({content}) => {
  return (
    <>
      <Box
        as='header'
      >
        <Heading
          as='h3'
          size='md'
        >
          {`${content?.firstName} ${content?.lastName}`}
        </Heading>

        <Text
          as='strong'
        >
          {content?.specialityName}
        </Text>
      </Box>

      <Box
        as='address'
      >
        {content?.address}
      </Box>

      <Btn
        text='Schedule an Appointment'
      />
    </>
  );
};

export default CardContentSpecialist;
