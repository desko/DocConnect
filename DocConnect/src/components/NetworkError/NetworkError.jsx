import {Alert, AlertIcon} from '@chakra-ui/alert';

const NetworkError = () => {
  return (
    <Alert
      status='error'
      mb='2rem'
      borderRadius='.5rem'
    >
      <AlertIcon />There was an error processing your request
    </Alert>
  );
};

export default NetworkError;
