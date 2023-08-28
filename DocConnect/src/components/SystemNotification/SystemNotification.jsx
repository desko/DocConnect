import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
  useToast,
} from '@chakra-ui/react';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import Btn from '../Btn/Btn';
import {resendEmailVerificationUser} from '../../services/servicesUsers';

const SystemNotification = () => {
  const toast = useToast();
  const [isSent, setIsSent] = useState(false);
  const {token} = useSelector((store) => store.user);

  const resendEmailHandler = async (token) => {
    const response = await resendEmailVerificationUser(token);
    if (response.response?.status > 200) {
      toast({
        title: `There was an error sending an email, please try again later.`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };


  return (
    <Alert
      status='error'
      justifyContent='center'
      position= 'fixed'
      top= 'var(--header-height)'
      left= '0'
      width= '100%'
      zIndex= '99'
      flexDirection= {{'base': 'column', 'md': 'row'}}
    >
      <Flex margin={{'base': '0.5rem', 'md': '0'}}>
        <AlertIcon />
        <AlertTitle>Your email is not verified!</AlertTitle>
      </Flex>
      <AlertDescription
        display= {{'base': 'none', 'md': 'inline'}}

      >Please find the verification email in your inbox.</AlertDescription>
      <Btn text='Resend'
        customProps={{
          'onClick': async () => {
            setIsSent(true);
            resendEmailHandler(token);
          },
          'variant': 'customOutline',
          'isDisabled': isSent,
          'border': 'none',
          '_hover': {
            'backgroundColor': 'red.300',
          },
          'marginLeft': {
            'md': '1rem',
          },
        }}/>
    </Alert>
  );
};

export default SystemNotification;
