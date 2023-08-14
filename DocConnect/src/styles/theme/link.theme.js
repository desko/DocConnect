import {defineStyle, defineStyleConfig} from '@chakra-ui/react';

const commonLinkStyles = {
  textDecoration: 'underline',
  textDecorationThickness: '.2rem',
  textUnderlineOffset: '.3rem',
  transition: 'text-decoration-color .4s',
};

const variants = defineStyle({
  custom: {
    color: 'red.400',
    ...commonLinkStyles,
    textDecorationColor: 'currentColor',
    transition: 'text-decoration-color .4s',
    _hover: {
      textDecorationColor: 'transparent',
    },
  },
  navLink: {
    color: 'lavender.400',
    ...commonLinkStyles,
    textDecorationColor: 'transparent',
    transition: 'text-decoration-color .4s, color .4s',
    _hover: {
      textDecorationColor: 'currentColor',
      color: 'red.400',
    },
    _activeLink: {
      textDecorationColor: 'currentColor',
      color: 'red.400',
      _hover: {
        textDecorationColor: 'transparent',
      },
    },
  },
});

const linkTheme = defineStyleConfig({
  variants,
});

export default linkTheme;
