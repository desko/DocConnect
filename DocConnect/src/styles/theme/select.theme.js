import {selectAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/react';

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(selectAnatomy.keys);

const variants = {
  custom: definePartsStyle({
    field: {
      fontSize: '1.6rem',
      color: 'quicksilver.400',
      border: '.1rem solid currentColor',
      borderRadius: '.4rem',
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
};

const selectTheme = defineMultiStyleConfig({
  variants,
});

export default selectTheme;
