import {
  Box,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from '@chakra-ui/react';
import Btn from '../Btn/Btn';
import CalendarSlider from '../CalendarSlider/CalendarSlider';
import {useEffect, useState} from 'react';
import {dateFormatter, getDayNameFromDateObject} from '../../common/helpers';
import {createUserAppointment, getDoctorAppointments, getUserAppointments} from '../../services/servicesAppointments';
import {useDispatch, useSelector} from 'react-redux';
import NetworkError from '../NetworkError/NetworkError';
import {logOut} from '../../store/features/userSlice';
import {useNavigate} from 'react-router-dom';
import { LOGIN_PAGE } from '../../common/routes';

const ModalAppointments = ({isOpen, handleClose, doctorId}) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const {userId, token} = useSelector((store) => store.user);
  const [selected, setSelected] = useState(null);
  const [success, setSuccess] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [docAppointments, setDocAppointments] = useState([]);
  const [userAppointments, setuserAppointments] = useState([]);

  useEffect(() => {
    const fetchDoctorApointments = async () => {
      const res = await getDoctorAppointments(doctorId, token);

      setDocAppointments(res);
    };

    const fetchUserApointments = async () => {
      const res = await getUserAppointments(doctorId, token);

      setuserAppointments(res);
    };

    fetchDoctorApointments();
    // fetchUserApointments();
  }, [doctorId, token, userId]);

  const handleSubmit = async () => {
    const data = await createUserAppointment(userId, doctorId, selected, token);
    setSubmited(true);

    console.log(data);

    if (
      data?.response?.status === 400 &&
      data?.response?.data?.errorMessage === 'The patient already has this appointment hour taken!'
    ) {
      setSubmited(false);
      setSuccess(false);
      toast({
        title: 'Ooops...',
        description: 'You already have an appointment for that hour.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }

    if (data?.code === 'ERR_NETWORK') {
      dispatch(logOut());
      navigate(LOGIN_PAGE);
    }

    if (data?.response?.status >= 402) {
      setSuccess(false);
    }

    if (data?.status === 201) {
      setSuccess(true);
    }
  };

  return (
    <Modal
      onClose={handleClose}
      isOpen={isOpen}
      scrollBehavior='outside'
      isCentered
      variant='custom'
    >
      <ModalOverlay />

      <ModalContent
        maxW={{
          base: '100%',
          lg: '77.6rem',
        }}
        width='100%'
        padding={{
          base: '1.5rem 2rem',
          md: '3.2rem 4rem',
        }}
      >
        <ModalHeader
          padding='1rem 0'
        >
          <Heading
            as='h2'
            size={{
              base: 'md',
              md: 'lg',
            }}
          >
            Schedule an Appointment
          </Heading>
        </ModalHeader>

        <ModalBody
          padding='1rem 0'
        >
          {
            !submited && !success && <CalendarSlider
              selected={selected}
              setSelected={setSelected}
              userAppointments={userAppointments}
              doctorAppointments={docAppointments}
            />
          }
          {
            submited && success && <Box>
              <Text>
                Successfuly made appointment for
                {` ${getDayNameFromDateObject('en-US', selected)} ${dateFormatter('en-US', selected)} ${selected.hour}`}
              </Text>
            </Box>
          }
          {
            submited && !success && <Box>
              <NetworkError />
            </Box>
          }
        </ModalBody>

        <ModalFooter
          padding='1rem 0'
          display='flex'
          alignItems='center'
          justifyContent='flex-end'
          gap='1rem'
        >
          {
            !submited && !success && <>
              <Btn
                text='Cancel'
                type='button'
                customProps={{
                  onClick: handleClose,
                }}
              />

              <Btn
                text='Schedule'
                type='button'
                customProps={{
                  onClick: handleSubmit,
                  isDisabled: !selected,
                }}
              />
            </>
          }
          {
            submited && <Btn
              text='Close'
              type='button'
              customProps={{
                onClick: handleClose,
              }}
            />
          }
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalAppointments;
