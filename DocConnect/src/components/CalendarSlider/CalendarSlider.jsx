import {Box, Flex, IconButton, Text} from '@chakra-ui/react';
import Btn from '../Btn/Btn';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  dateFormatter,
  getDayNameFromDateObject,
  generateDatesOneMonthLaterWithoutWeekends,
} from '../../common/helpers';
import {useRef} from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';
import {APPOINTMENTS_HOURS} from '../../common/constants';

const CalendarSlider = ({selected, setSelected, userAppointments = [], doctorAppointments = []}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const dates = generateDatesOneMonthLaterWithoutWeekends();

  return (
    <Box>
      <Flex
        justifyContent='space-between'
        pb='2rem'
      >
        <IconButton
          ref={prevRef}
          aria-label='previous'
          style={{
            '--icon-width': '3rem',
          }}
          icon={
            <ChevronLeftIcon
              width='var(--icon-width, 100%)'
              height='auto'
              lineHeight='0'
            />
          }
          fontSize='2rem'
          width='4rem'
          height='4rem'
          padding='0'
          bgColor='red.500'
          color='white'
          transition='background-color .4s'
          _hover={{
            bgColor: 'red.400',
          }}
        />
        <IconButton
          ref={nextRef}
          aria-label='previous'
          style={{
            '--icon-width': '3rem',
          }}
          icon={
            <ChevronRightIcon
              width='var(--icon-width, 100%)'
              height='auto'
              lineHeight='0'
            />
          }
          fontSize='2rem'
          width='4rem'
          height='4rem'
          padding='0'
          bgColor='red.500'
          color='white'
          transition='background-color .4s'
          _hover={{
            bgColor: 'red.400',
          }}
        />
      </Flex>
      <Swiper
        modules={[Navigation]}
        slidesPerView='1'
        spaceBetween='48'
        slidesPerGroup='1'
        allowTouchMove={false}
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: '20',
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: '48',
          },
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {
          dates.map((date) => {
            return (
              <SwiperSlide
                key={dateFormatter('en-US', date)}
              >
                <Flex
                  flexDirection='column'
                  gap='1.6rem'
                >
                  <Box
                    textAlign='center'
                  >
                    <Text
                      as='strong'
                      fontWeight='700'
                      display='block'
                    >{getDayNameFromDateObject('en-US', date)}</Text>

                    <Text
                      as='strong'
                      fontWeight='700'
                      display='block'
                    >{dateFormatter('en-US', date)}</Text>
                  </Box>

                  {
                    APPOINTMENTS_HOURS.map((hour) => {
                      let isCurrent = false;
                      if (
                        selected?.hour === hour &&
                        selected?.date === date.date &&
                        selected?.month === date.month &&
                        selected?.year === date.year
                      ) {
                        isCurrent = true;
                      }

                      // TODO: check is date collision
                      // let isDisabled = false;

                      return (
                        <Btn
                          key={dateFormatter('en-US', date)+hour}
                          customProps={{
                            'variant': 'customOutlineTransparent',
                            'onClick': () => {
                              setSelected({
                                ...date,
                                hour,
                              });
                            },
                            'data-active': isCurrent || null,
                            // 'isDisabled': isDisabled,
                          }}
                          type='button'
                          text={hour}
                        />
                      );
                    })
                  }
                </Flex>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </Box>
  );
};

export default CalendarSlider;
