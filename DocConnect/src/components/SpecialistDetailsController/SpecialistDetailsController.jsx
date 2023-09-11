import {Box, Flex, Heading, Image, Text} from '@chakra-ui/react';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {ReactComponent as IconLocation} from '../../assets/icon-location.svg';
import {ReactComponent as IconStar} from '../../assets/icon-star.svg';
import {useSelector} from 'react-redux';
import Btn from '../Btn/Btn';

const SpecialistDetailsController = () => {
  const {token} = useSelector((store) => store.user);
  const {id} = useParams();

  const response = {
    imageUrl: '/images/generated_14.png',
    specialityName: 'Dermatology',
    firstName: 'Sabrina',
    lastName: 'Everett',
    address: '09956 Joanna Junctions Suite 403',
    // eslint-disable-next-line max-len
    educationSummary: '- 2005 Master of Science, Pediatric Nurse Practitioner, University of Cincinnati, Cincinnati, Ohio \n- 2003 Bachelor of Science, Psychology, Western Kentucky University, Bowling Green, Kentucky\n- 2004 Certified Pediatric Nurse Practitioner, Kentucky Board\n- 2005 Master of Science, Pediatric Nurse Practitioner, Kentucky Board\n- 2013 - 2020\n- 2002-2005\n- 2000-2004\n- 2008-Present\n- 2008-Present\n- 2004-Present\n- 2003-2004\n\nThis doctor’s certifications are:\n\n- ACHPN Certified Pediatric Nurse Practitioner\n- 2016 - 2021\n- 2016-2021\n- 2016 - 2021\n\nThis doctor’s board certifications are:\n\n- Pediatrics\n- 2005-present\n- 2005-present\n\nSpecialties:\n- Pediatric Primary Care\n- Immunizations and Vaccines\n- Asthma\n- ADD/ADHD\n- ADHD\n- ADHD & Depression\n- Acute care',
    rating: 2.3333333333333335,
  };

  const summaryArray = response?.educationSummary.split('\n');
  console.log(summaryArray);

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <Box>
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
                src={`https://docconnect-red-cdn.test.devsmm.com/${response?.imageUrl}`}
                alt={`${response?.firstName} ${response?.lastName}`}
                position='absolute'
                top='0'
                left='0'
                width='100%'
                height='100%'
                objectFit='cover'
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
                {Math.floor(Number(response?.rating) * 10) / 10}
              </Flex>

              <Heading
                as='h1'
                size='lg'
              >
                {`${response?.firstName} ${response?.firstName}`}
              </Heading>

              <Text
                as='strong'
                color='red.500'
              >
                {response?.specialityName}
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
            {
              response?.address !== '' &&
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
                  {response?.address || null}
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
                isDisabled: !token,
              }}
            />
          </Box>
        </Flex>
      </Box>

      <Box
        borderRadius='1.5rem'
        padding='3rem'
        bgColor='white'
        boxShadow='0 .2rem .2rem 0 rgba(0,0,0, .25)'
      >
        <Heading
          as='h2'
          size='md'
          pb='3rem'
        >{`About ${response?.firstName} ${response?.firstName}`}</Heading>

        {
          summaryArray.map((summary, index) => {
            return summary !== '' ?<Text
              key={`summary_${index}`}
            >{summary}</Text> : null;
          })
        }
      </Box>
    </Box>
  );
};

export default SpecialistDetailsController;
