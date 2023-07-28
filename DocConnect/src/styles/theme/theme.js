import {extendTheme} from '@chakra-ui/react';
import globalStyles from './global.theme';
import colors from './colors.theme';
import fonts from './fonts.theme';
import cardTheme from '../../components/Card/card.theme';
import headingTheme from './heading.theme';

const theme = extendTheme({
  colors,
  fonts,
  styles: globalStyles,
  components: {
    Card: cardTheme,
    Heading: headingTheme,
  },
});

export default theme;
