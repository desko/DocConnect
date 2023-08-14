/* eslint-disable quote-props */
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
  hamburger: defineStyle({
    display: {
      base: 'inline-flex',
      lg: 'none',
    },
    padding: '0',
    position: 'relative',
    minWidth: 'unset',
    width: '1.8rem',
    height: '1.2rem',
    '--offset': '.5rem',
    _before: {
      '--side': '-1',
      content: `''`,
      position: 'absolute',
      left: '0',
      top: '50%',
      transform: 'translateY(-50%)',
      height: '.2rem',
      width: '100%',
      bgColor: 'currentColor',
      marginTop: 'calc(var(--offset) * var(--side))',
      transition: 'margin .2s .2s, transform .2s',
      _groupChecked: {
        marginTop: '0',
        transform: 'translatey(-50%) rotate(45deg)',
        transition: 'margin .2s, transform .2s .2s',
      },
    },
    _after: {
      '--side': '1',
      content: `''`,
      position: 'absolute',
      left: '0',
      top: '50%',
      transform: 'translateY(-50%)',
      height: '.2rem',
      width: '100%',
      bgColor: 'currentColor',
      marginTop: 'calc(var(--offset) * var(--side))',
      transition: 'margin .2s .2s, transform  .2s',
      _groupChecked: {
        marginTop: '0',
        transform: 'translatey(-50%) rotate(-45deg)',
        transition: 'margin .2s, transform .2s .2s',
      },
    },
  }),
};

const buttonTheme = defineStyleConfig({
  variants,
});

export default buttonTheme;
