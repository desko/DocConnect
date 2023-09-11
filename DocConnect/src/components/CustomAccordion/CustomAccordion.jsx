import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Text,
} from '@chakra-ui/react';
import {ReactComponent as IconLocation} from '../../assets/icon-location.svg';

const CustomAccordion = ({doctorName, date, address, specialty}) => {
  console.log(doctorName);

  return (
    <Accordion allowMultiple display='flex' flexDirection='column' gap='1.5rem'>
      <AccordionItem>
        <AccordionButton border='1px solid gray' borderRadius='4px 4px 0 0'>
          <Flex flex='1' flexDirection={{'base': 'column', 'sm': 'row'}} fontSize='15px' gap='2rem'>
            <Flex flexDirection='column' alignItems='start' width='10rem'>
              <Text fontWeight='bold'>Date</Text>
              <Text>{date}</Text>
            </Flex>
            <Flex flexDirection='column' alignItems='start' width='12rem'>
              <Text fontWeight='bold'>Doctor</Text>
              <Text textAlign='left'>{doctorName}</Text>
            </Flex>
            <Flex flexDirection='column' alignItems='start' width='10rem'>
              <Text fontWeight='bold'>Specialty</Text>
              <Text>{specialty}</Text>
            </Flex>
          </Flex>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel padding='3rem 2.5rem' border='1px solid gray' borderRadius='0 0 4px 4px'>
          <Flex
            flexDirection='column'
            gap='0.5rem'
          >
            <Text fontWeight='bold'>Address</Text>
            <Flex
              as='address'
              gap='1rem'
            >
              <IconLocation/>
              <Text
                as='span'
                pt='.4rem'
              >
                {address}
              </Text>
            </Flex>
          </Flex>
        </AccordionPanel>
      </AccordionItem>

    </Accordion>
  );
};

export default CustomAccordion;
