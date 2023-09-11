import {Box, Flex, Heading, Image, Spinner, Text} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {ReactComponent as IconLocation} from '../../assets/icon-location.svg';
import {ReactComponent as IconStar} from '../../assets/icon-star.svg';
import {useSelector} from 'react-redux';
import Btn from '../Btn/Btn';
import {getSpecialist} from '../../services/servicesSpecialists';

const SpecialistDetailsController = () => {
  const {token} = useSelector((store) => store.user);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({});
  const {id} = useParams();

  const response = {
    imageUrl: '/images/generated_14.png',
    specialityName: 'Dermatology',
    firstName: 'Sabrina',
    lastName: 'Everett',
    address: '09956 Joanna Junctions Suite 403',
    // eslint-disable-next-line max-len
    doctorSummary: 'Dr. Michael Miller is a gastroenterologist based in Portland, Oregon. With over 15 years of experience, he specializes in the diagnosis, treatment, and prevention of digestive system disorders. He received his medical degree from the University of California, San Francisco, and completed a gastroenterology fellowship at Columbia University. Dr. Miller is a member of several professional organizations, including the American Gastroenterological Association and the American College of Gastroenterology.',
    rating: 2.3333333333333335,
  };

  // useEffect(() => {
  //   console.log(results);
  // }, [results]);

  useEffect(() => {
    setLoading(true);
    const getDoctorInfo = async () => {
      const res = await getSpecialist(id);

      setResults(res);
    };

    getDoctorInfo().then(() => {
      setLoading(false);
    });
    // TODO: Add error handling
  }, [id]);

  return (
    <Box>
      {
        loading &&
        <Spinner color='red.400' size='xl' display='block' mt='3.6rem' mx='auto' />
      }

      {
        !loading && <>
          <Box
            borderRadius='1.5rem'
            overflow='hidden'
            bgColor='white'
            boxShadow='0 .2rem .2rem 0 rgba(0,0,0, .25)'
            mb='3.5rem'
          >
            <Box
              pb={{
                base: '13rem',
                md: '18%',
                lg: '15%',
              }}
              bgGradient='linear(to-r, red.400, red.500)'
            >
            </Box>

            <Flex
              flexDirection={{
                base: 'column',
                md: 'row',
              }}
              justifyContent='space-between'
              padding={{
                base: '3rem 2rem',
                md: '3rem 2rem',
                lg: '4.8rem 4.5rem 3.5rem',
              }}
            >
              <Box
                flex={{
                  md: '0 0 33%',
                  lg: '0 0 25%',
                  xl: '0 0 20%',
                }}
                textAlign={{
                  base: 'center',
                  md: 'initial',
                }}
                pb={{
                  base: '2rem',
                  md: '0',
                }}
              >
                <Box
                  as='figure'
                  position='relative'
                  aspectRatio='1'
                  borderRadius='50%'
                  border='1rem solid'
                  borderColor='white'
                  overflow='hidden'
                  lineHeight='0'
                  maxW={{
                    base: 'min(25rem, 100%)',
                    md: 'unset',
                  }}
                  mb='1rem'
                  mt={{
                    base: '-12.5rem',
                    md: '-65%',
                    lg: '-75%',
                    xl: '-85%',
                  }}
                  mx={{
                    base: 'auto',
                    md: '0',
                  }}
                >
                  <Image
                    src={`${results?.imageUrl}`}
                    alt={`${results?.firstName} ${results?.lastName}`}
                    position='absolute'
                    top='0'
                    left='0'
                    width='100%'
                    height='100%'
                    objectFit='cover' />
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
                    as='h1'
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
                flex={{
                  md: '0 0 60%',
                  lg: '0 0 65%',
                  xl: '0 0 70%',
                }}
              >
                {results?.address !== '' &&
              <Flex
                alignItems='center'
                justifyContent={{
                  base: 'center',
                  md: 'flex-start',
                }}
                as='address'
                gap='.5rem'
                pb='2rem'
              >
                <IconLocation style={{
                  flex: '0 0 auto',
                }} />

                <Text
                  as='span'
                >
                  {results?.address || null}
                </Text>
              </Flex>}

                <Btn
                  text={token ? 'Schedule an Appointment' : 'Login to Schedule an Appointment'}
                  styleProps={{
                    width: {
                      base: '100%',
                      md: 'auto',
                    },
                  }}
                  customProps={{
                    isDisabled: !token,
                  }} />
              </Box>
            </Flex>
          </Box><Box
            borderRadius='1.5rem'
            padding='3rem'
            bgColor='white'
            boxShadow='0 .2rem .2rem 0 rgba(0,0,0, .25)'
          >
            <Heading
              as='h2'
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
