import AppointmentsDetails from '../AppointmentsDetails/AppointmentsDetails';
import { Box } from '@chakra-ui/react';
import Pagination from '../Pagination/Pagination';

const AppointmentsController = () => {
  return (
    <Box variant='unstyled' backgroundColor='offwhite.400' borderRadius='15px' padding='2rem'>
      <AppointmentsDetails upcoming={[]} past={[]}/>
      <Pagination itemsPerPage={5} totalItems={10} setCurrentPage={() => {}} currentPage={1}/>
    </Box>
  );
};

export default AppointmentsController;
