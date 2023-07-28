import {defineStyle, defineStyleConfig} from '@chakra-ui/react';

const sizes = {
  'xs': defineStyle({
    fontSize: '1.6rem',
    lineHeight: 'inherit',
  }),
  'sm': defineStyle({
    fontSize: '2rrem',
    lineHeight: 'inherit',
  }),
  'md': defineStyle({
    fontSize: '2.4rem',
    lineHeight: 'inherit',
  }),
  'lg': defineStyle({
    fontSize: '2.8rem',
    lineHeight: 'inherit',
  }),
  'xl': defineStyle({
    fontSize: '3.2rem',
    lineHeight: 'inherit',
  }),
  '2xl': defineStyle({
    fontSize: '3.6rem',
    lineHeight: 'inherit',
  }),
  '3xl': defineStyle({
    fontSize: '4rem',
    lineHeight: 'inherit',
  }),
  '4xl': defineStyle({
    fontSize: '4.4rem',
    lineHeight: 'inherit',
  }),
  '5xl': defineStyle({
    fontSize: '4.8rem',
    lineHeight: 'inherit',
  }),
  '6xl': defineStyle({
    fontSize: '5.2rem',
    lineHeight: 'inherit',
  }),
};

const headingTheme = defineStyleConfig({
  sizes,
});

export default headingTheme;
