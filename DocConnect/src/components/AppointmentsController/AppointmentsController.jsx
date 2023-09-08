import AppointmentsDetails from '../AppointmentsDetails/AppointmentsDetails';
import {Box} from '@chakra-ui/react';
import Pagination from '../Pagination/Pagination';
import {getUpcomingAppointments} from '../../services/servicesAppointments';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const AppointmentsController = () => {
  const [appointments, setAppointments] = useState([]);
  const {userId, token} = useSelector((store) => store.user);

  useEffect(() => {
    const fetchAppointments = async () => {
      const data = await getUpcomingAppointments(userId, token);
      console.log(data);
      setAppointments(data);
      console.log(appointments);
    };
    fetchAppointments();
  }, []);

  return (
    <Box variant='unstyled' backgroundColor='offwhite.400' borderRadius='15px' padding='2rem'>
      <AppointmentsDetails upcoming={appointments} past={[]}/>
      <Pagination itemsPerPage={5} totalItems={10} setCurrentPage={() => {}} currentPage={1}/>
    </Box>
  );
};

export default AppointmentsController;
