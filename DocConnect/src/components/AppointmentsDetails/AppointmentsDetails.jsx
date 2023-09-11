import {Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react';
import CustomAccordion from '../CustomAccordion/CustomAccordion';

const AppointmentsDetails = ({upcomingAppointments}) => {
  console.log(upcomingAppointments);
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
        <TabPanel display='flex' flexDirection='column' gap='1rem'>
          {
            upcomingAppointments?.map((appointment) => {
              return <CustomAccordion
                key={appointment.id}
                doctorName={appointment.doctorName}
                date={appointment.date}
                address={appointment.address}
                specialty={appointment.specialty}
              />;
            })
          }
        </TabPanel>
        <TabPanel >
          <p>There is nothing here!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>

  );
};

export default AppointmentsDetails;
