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
} from '@chakra-ui/react';
import Btn from '../Btn/Btn';
import CalendarSlider from '../CalendarSlider/CalendarSlider';
import {useEffect, useState} from 'react';
import {dateFormatter, getDayNameFromDateObject} from '../../common/helpers';
import {createUserAppointment, getDoctorAppointments, getUserAppointments} from '../../services/servicesAppointments';
import {useSelector} from 'react-redux';

const ModalAppointments = ({isOpen, handleClose, doctorId}) => {
  const {userId, token} = useSelector((store) => store.user);
  const [selected, setSelected] = useState(null);
  const [success, setSuccess] = useState(false);
  const [docAppointments, setDocAppointments] = useState([]);
  const [userAppointments, setuserAppointments] = useState([]);

  useEffect(() => {
    const fetchDoctorApointments = async () => {
      const res = await getDoctorAppointments(doctorId, token);
      console.log(res);

      setDocAppointments(res);
    };

    const fetchUserApointments = async () => {
      const res = await getUserAppointments(doctorId, token);
      console.log(res);

      setuserAppointments(res);
    };

    fetchDoctorApointments();
    // fetchUserApointments();
  }, [doctorId, token, userId]);

  const handleSubmit = () => {
    console.log(selected);
    const data = createUserAppointment(userId, doctorId, selected, token);
    console.log(data);
    setSuccess(true);
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
            !success && <CalendarSlider
              selected={selected}
              setSelected={setSelected}
              userAppointments={userAppointments}
              doctorAppointments={docAppointments}
            />
          }
          {
            success && <Box>
              <Text>
                Successfuly made appointment for
                {` ${getDayNameFromDateObject('en-US', selected)} ${dateFormatter('en-US', selected)} ${selected.hour}`}
              </Text>
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
            !success && <>
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
            success && <Btn
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
