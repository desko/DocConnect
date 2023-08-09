import {extendTheme} from '@chakra-ui/react';
import globalStyles from './global.theme';
import colors from './colors.theme';
import fonts from './fonts.theme';
import cardTheme from '../../components/Card/card.theme';
import headingTheme from './heading.theme';
import breakpoints from './breakpoints.theme';
import inputTheme from './input.theme';
import formTheme from './form.theme';
import formLabelTheme from './formLabel.theme';
import buttonTheme from '../../components/Btn/Btn.theme';

const theme = extendTheme({
  colors,
  fonts,
  styles: globalStyles,
  components: {
    Card: cardTheme,
    Heading: headingTheme,
    Input: inputTheme,
    Form: formTheme,
    FormLabel: formLabelTheme,
    Button: buttonTheme,
  },
  breakpoints,
});

export default theme;
