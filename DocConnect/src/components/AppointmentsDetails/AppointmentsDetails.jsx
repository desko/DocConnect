import {Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react';
import CustomAccordion from '../CustomAccordion/CustomAccordion';
import {
  tabContainer,
  tabPanel,
  tabsContainer,
} from './appointmentsDetails.theme';

const AppointmentsDetails = ({upcomingAppointments}) => {
  return (
    <Tabs isFitted {...tabsContainer}>
      <TabList borderBottom='2px solid gray' >
        <Tab {...tabContainer}>Upcoming appointments</Tab>
        <Tab {...tabContainer} isDisabled >Past appointments</Tab>
      </TabList>
      <TabPanels>
        <TabPanel {...tabPanel}>
          {
            upcomingAppointments?.map((appointment) => {
              return <CustomAccordion
                key={appointment.id}
                doctorName={appointment.doctorName}
                date={appointment.date}
                address={appointment.address}
                specialty={appointment.doctorSpecialty}
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
