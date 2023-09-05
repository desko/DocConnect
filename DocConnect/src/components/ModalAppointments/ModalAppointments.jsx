import {Heading, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay} from '@chakra-ui/react';
import Btn from '../Btn/Btn';
import Calendar from '../Calendar/Calendar';

const ModalAppointments = ({isOpen, handleClose}) => {
  const handleSubmit = () => {

  };

  return (
    <Modal onClose={handleClose} isOpen={isOpen}>
      <ModalOverlay />

      <ModalContent
        maxW='77.6rem'
        width='100%'
        padding='3.2rem 4rem'
      >
        <ModalHeader
          padding='1rem 0'
        >
          <Heading
            as='h2'
            size='lg'
          >
            Schedule an Appointment
          </Heading>
        </ModalHeader>

        <ModalBody
          padding='1rem 0'
        >
          <Calendar />
        </ModalBody>

        <ModalFooter
          padding='1rem 0'
          display='flex'
          alignItems='center'
          justifyContent='flex-end'
          gap='1rem'
        >
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
            }}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalAppointments;
