import {checkboxAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/react';

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const variants = definePartsStyle({
  custom: definePartsStyle({
    label: {
      fontSize: '1.4rem',
    },
    control: {
      color: 'quicksilver.400',
      width: '1.6rem',
      height: '1.6rem',
      borderRadius: '.2rem',
      borderColor: 'base',
      _checked: {
        bgColor: 'red.400',
        borderColor: 'red.400',
        _hover: {
          bgColor: 'red.400',
          borderColor: 'red.400',
        },
      },
    },
    icon: {
      fontSize: '1rem',
    },
  }),
});

const checkboxTheme = defineMultiStyleConfig({
  variants,
});

export default checkboxTheme;
