import {Box, Flex, Text} from '@chakra-ui/react';
import Btn from '../Btn/Btn';

const Calendar = () => {
  return (
    <Box>
      <Flex
        flexDirection='column'
      >
        <Text>Monday</Text>

        <Text
          as='strong'
        >03-20-2023</Text>

        <Btn
          type='button'
          text='09:00'
        />
        <Btn
          type='button'
          text='10:00'
        />
        <Btn
          type='button'
          text='11:00'
        />
        <Btn
          type='button'
          text='12:00'
        />
        <Btn
          type='button'
          text='13:00'
        />
        <Btn
          type='button'
          text='14:00'
        />
        <Btn
          type='button'
          text='15:00'
        />
        <Btn
          type='button'
          text='16:00'
        />
      </Flex>
    </Box>
  );
};

export default Calendar;
