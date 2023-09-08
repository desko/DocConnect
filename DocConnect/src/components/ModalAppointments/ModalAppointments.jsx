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
import {useState} from 'react';
import {dateFormatter, getDayNameFromDateObject} from '../../common/helpers';
const ModalAppointments = ({isOpen, handleClose}) => {
  const [selected, setSelected] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setSuccess(true);
  };

  return (
    <Modal
      onClose={handleClose}
      isOpen={isOpen}
      scrollBehavior='outside'
    >
      <ModalOverlay />

      <ModalContent
        maxW={{
          base: 'calc(100% - 4rem)',
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
