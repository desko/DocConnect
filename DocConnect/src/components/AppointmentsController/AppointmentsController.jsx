import AppointmentsDetails from '../AppointmentsDetails/AppointmentsDetails';
import {Box, Spinner, Text} from '@chakra-ui/react';
import Pagination from '../Pagination/Pagination';
import {getUpcomingAppointments} from '../../services/servicesAppointments';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const AppointmentsController = () => {
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const {userId, token} = useSelector((store) => store.user);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [appointmentsPerPage] = useState(6);
  const [error, setError] = useState(false);
  const userTime = new Date();
  const userLocalTime = userTime.toLocaleString('en-US');

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      const data = await getUpcomingAppointments(userId, token, userLocalTime);
      if (data.status === 200) {
        setUpcomingAppointments(data.data.result);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [userId, token, userLocalTime]);


  // Pagination
  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = upcomingAppointments?.slice(indexOfFirstAppointment, indexOfLastAppointment);

  return (
    <Box variant='unstyled' backgroundColor='offwhite.400' borderRadius='15px' padding='2rem'>
      <AppointmentsDetails upcomingAppointments={currentAppointments} pastAppointments={[]}/>
      {
        loading &&
        <Spinner color='red.400' size='xl' display='block' mt='3.6rem' mx='auto' />
      }
      { upcomingAppointments?.length > 0 && upcomingAppointments.length > appointmentsPerPage ?
        <Pagination
          itemsPerPage={appointmentsPerPage}
          totalItems={upcomingAppointments.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        /> :
        null
      }
      {
        !loading && upcomingAppointments?.length === 0 && !error &&
        <Text textAlign='center'>There are no upcoming appointments</Text>
      }
      {
        !loading && upcomingAppointments?.length === 0 && error &&
        <Text textAlign='center'>There was an error, please try again.</Text>
      }
    </Box>
  );
};

export default AppointmentsController;
