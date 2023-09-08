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

const CustomAccordion = () => {
  return (
    <Accordion allowMultiple display='flex' flexDirection='column' gap='1.5rem'>
      <AccordionItem>

        <AccordionButton border='1px solid gray' borderRadius='4px 4px 0 0'>
          <Flex flex='1' textAlign='left' flexDirection='row' fontSize='15px'>
            <Flex flexDirection='column' margin='0.5rem 1rem'>
              <Text fontWeight='bold'>Date</Text>
              <Text>04/22/22</Text>
            </Flex>
            <Flex flexDirection='column' margin='0.5rem 1rem'>
              <Text fontWeight='bold'>Doctor</Text>
              <Text>Elizabeth Cliford</Text>
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
      23475 Glacier View Dr, Eagle River, Alaska 99577, USA
              </Text>
            </Flex>
          </Flex>
        </AccordionPanel>
      </AccordionItem>

    </Accordion>
  );
};

export default CustomAccordion;
