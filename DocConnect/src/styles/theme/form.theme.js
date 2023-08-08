import {formAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/react';

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(formAnatomy.keys);

const variants = {
  custom: definePartsStyle({
    container: {
      pb: '2rem',
    },
    requiredIndicator: {
      fontSize: '2rem',
    },
    helperText: {
      fontSize: '1.2rem',
      color: 'quicksilver.400',
      mt: '.5rem',
    },
    field: {
      _last: {
        mb: '2rem',
      },
    },
  }),
};

const formTheme = defineMultiStyleConfig({
  variants,
});

export default formTheme;
