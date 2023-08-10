import {defineStyle, defineStyleConfig} from '@chakra-ui/react';

const variants = {
  custom: defineStyle({
    fontSize: '1.4rem',
    color: 'white',
    fontWeight: '700',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'capitalize',
    padding: '1.5rem 3.5rem',
    lineHeight: '1',
    height: 'auto',
    bgColor: 'red.500',
    borderRadius: '.5rem',
    transition: 'background-color .4s',
    _hover: {
      bgColor: 'red.400',
    },
  }),
  customOutline: defineStyle({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'capitalize',
    lineHeight: '1',
    height: 'auto',
    transition: 'background-color .4s',
    padding: '.4rem 1.2rem',
    fontWeight: '700',
    fontSize: '1.6rem',
    borderRadius: '.2rem',
    border: '.1rem solid',
    borderColor: 'bodyText',
    bgColor: 'red.200',
    color: 'bodyText',
    _hover: {
      bgColor: 'red.100',
    },
  }),
};

const buttonTheme = defineStyleConfig({
  variants,
});

export default buttonTheme;
