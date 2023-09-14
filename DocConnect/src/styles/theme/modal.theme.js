import {modalAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/styled-system';

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(modalAnatomy.keys);

const variants = {
  custom: definePartsStyle({
    dialogContainer: {
      padding: '2rem',
    },
  })};

export const modalTheme = defineMultiStyleConfig({
  variants,
});
