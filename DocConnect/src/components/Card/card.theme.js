import {cardAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/react';

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(cardAnatomy.keys);

const variants = {
  custom: definePartsStyle({
    container: {
      borderRadius: '1.5rem',
      overflow: 'hidden',
      border: '.2rem inset rgba(0, 0, 0, .15)',
      bgColor: 'offwhite.400',
      color: 'inherit',
    },
    body: {
      p: '1.7rem 1.5rem 3rem',
      color: 'inherit',
    },

  }),
};

const cardTheme = defineMultiStyleConfig({
  variants,
});

export default cardTheme;
