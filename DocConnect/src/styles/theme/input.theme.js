import {inputAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/react';

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(inputAnatomy.keys);

const variants = {
  custom: definePartsStyle({
    field: {
      fontSize: '1.6rem',
      color: 'quicksilver.400',
      border: '.1rem solid currentColor',
      height: 'auto',
      lineHeight: '2.38',
      _placeholder: {
        color: 'quicksilver.400',
      },
      _hover: {
        color: 'bodyText',
      },
      _focus: {
        color: 'bodyText',
      },
    },
  }),
  customPush: definePartsStyle({
    field: {
      fontSize: '1.6rem',
      color: 'quicksilver.400',
      border: '.1rem solid currentColor',
      height: 'auto',
      lineHeight: '2.38',
      _last: {
        mb: '2rem',
      },
      _placeholder: {
        color: 'quicksilver.400',
      },
      _hover: {
        color: 'bodyText',
      },
      _focus: {
        color: 'bodyText',
      },
    },
  }),
};

const inputTheme = defineMultiStyleConfig({
  variants,
});

export default inputTheme;
