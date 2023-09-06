import {Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react';
import CustomAccordion from '../CustomAccordion/CustomAccordion';

const AppointmentsDetails = () => {
  return (
    <Tabs isFitted padding="1rem 0" colorScheme='red.400'>
      <TabList borderBottom='2px solid gray' >
        <Tab
          fontSize={{base: '15px', sm: '20px'}}
          _selected={{color: 'red.400', borderBottom: '2px'}}
          color='gray'
        >Upcoming appointments</Tab>
        <Tab
          fontSize={{base: '15px', sm: '20px'}}
          _selected={{color: 'red.400', borderBottom: '2px'}}
          color='gray'
          isDisabled
        >Past appointments</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <CustomAccordion/>
        </TabPanel>
        <TabPanel >
          <p>past!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>

  );
};

export default AppointmentsDetails;
