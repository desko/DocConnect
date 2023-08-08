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
};

const buttonTheme = defineStyleConfig({
  variants,
});

export default buttonTheme;
