import {Box, Flex, Heading, Image, Spinner, Text, useDisclosure} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {ReactComponent as IconLocation} from '../../assets/icon-location.svg';
import {ReactComponent as IconStar} from '../../assets/icon-star.svg';
import {useSelector} from 'react-redux';
import Btn from '../Btn/Btn';
import {getSpecialist} from '../../services/servicesSpecialists';
import NetworkError from '../NetworkError/NetworkError';
import {
  cardAbout,
  cardAddress,
  cardContainer,
  cardContainerBanner,
  cardContainerContent,
  cardContainerFlex,
  cardContainerHeader,
  cardHeaderFigure,
  cardHeaderImage,
} from './SpecialistDetailsController.theme';
import ModalAppointments from '../ModalAppointments/ModalAppointments';

const SpecialistDetailsController = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {token} = useSelector((store) => store.user);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({});
  const [error, setError] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    const getDoctorInfo = async () => {
      const res = await getSpecialist(id);

      if (res === null) {
        setError(true);
        return;
      }

      if (res?.status >= 400) {
        setError(true);
        return;
      }

      setResults(res);
    };

    getDoctorInfo().then(() => {
      setLoading(false);
    });
  }, [id]);

  if (error) return <NetworkError />;

  return (
    <Box>
      {
        loading &&
        <Spinner color='red.400' size='xl' display='block' mt='3.6rem' mx='auto' />
      }

      {
        !loading && <>
          <Box
            {...cardContainer}
          >
            <Box
              {...cardContainerBanner}
            >
            </Box>

            <Flex
              {...cardContainerFlex}
            >
              <Box
                {...cardContainerHeader}
              >
                <Box
                  as='figure'
                  {...cardHeaderFigure}
                >
                  <Image
                    src={`${results?.imageUrl}`}
                    alt={`${results?.firstName} ${results?.lastName}`}
                    {...cardHeaderImage}
                  />
                </Box>

                <Box>
                  <Flex
                    role='group'
                    aria-label='rating'
                    justifyContent='center'
                    gap='.5rem'
                    mb='2rem'
                  >
                    <Box
                      as='figure'
                      color='yellow.400'
                    >
                      <IconStar />
                    </Box>
                    {Math.floor(Number(results?.rating) * 10) / 10}
                  </Flex>

                  <Heading
                    as='h2'
                    size='lg'
                  >
                    {`${results?.firstName} ${results?.lastName}`}
                  </Heading>

                  <Text
                    as='strong'
                    color='red.500'
                  >
                    {results?.specialityName}
                  </Text>
                </Box>
              </Box>

              <Box
                {...cardContainerContent}
              >
                {
                  results?.address !== '' &&
                  <Flex
                    role='group'
                    aria-label='address'
                    {...cardAddress}
                  >
                    <IconLocation style={{
                      flex: '0 0 auto',
                    }} />

                    <Text
                      as='span'
                    >
                      {results?.address || null}
                    </Text>
                  </Flex>
                }

                <Btn
                  text={token ? 'Schedule an Appointment' : 'Login to Schedule an Appointment'}
                  styleProps={{
                    width: {
                      base: '100%',
                      md: 'auto',
                    },
                  }}
                  customProps={{
                    onClick: onOpen,
                    isDisabled: !token,
                  }} />

                {
                  isOpen && token && <ModalAppointments
                    isOpen={isOpen}
                    handleClose={onClose}
                    doctorId={id}
                    doctorName={`${results?.firstName} ${results?.lastName}`}
                  />
                }
              </Box>
            </Flex>
          </Box>

          <Box
            role='group'
            aria-label={`About ${results?.firstName} ${results?.lastName}`}
            {...cardAbout}
          >
            <Heading
              as='h3'
              size='md'
              pb='3rem'
            >{`About ${results?.firstName} ${results?.lastName}`}</Heading>

            <Text>{results?.doctorSummary}</Text>
          </Box>
        </>
      }
    </Box>
  );
};

export default SpecialistDetailsController;
