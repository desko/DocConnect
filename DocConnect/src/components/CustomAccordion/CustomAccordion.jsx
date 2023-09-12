import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Text,
} from '@chakra-ui/react';
import {
  accordionContainer,
  accordionButton,
  infoContainer,
  info,
  moreInfo,
} from './customAccordion.theme';
import {ReactComponent as IconLocation} from '../../assets/icon-location.svg';

const CustomAccordion = ({doctorName, date, address, specialty}) => {
  return (
    <Accordion allowMultiple {...accordionContainer}>
      <AccordionItem>
        <AccordionButton {...accordionButton}>
          <Flex {...infoContainer}>
            <Flex {...info}>
              <Text fontWeight='bold'>Date</Text>
              <Text>{date}</Text>
            </Flex>
            <Flex {...info}>
              <Text fontWeight='bold'>Doctor</Text>
              <Text textAlign='left'>{doctorName}</Text>
            </Flex>
            <Flex {...info}>
              <Text fontWeight='bold'>Specialty</Text>
              <Text>{specialty}</Text>
            </Flex>
          </Flex>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel {...moreInfo}>
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
