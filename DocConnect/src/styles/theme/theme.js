import {extendTheme} from '@chakra-ui/react';
import globalStyles from './global.theme';
import colors from './colors.theme';
import fonts from './fonts.theme';
import cardTheme from '../../components/Card/card.theme';
import headingTheme from './heading.theme';
import breakpoints from './breakpoints.theme';


const theme = extendTheme({
  colors,
  fonts,
  styles: globalStyles,
  components: {
    Card: cardTheme,
    Heading: headingTheme,
  },
  breakpoints,
});

export default theme;