import { StyleSheet } from 'react-native';
import { APP_FONT_SIZE, PADDING_HORIZONTAL } from 'constants/styleConstants';
import { CLR_MAIN_THEME } from 'constants/colors';

export default StyleSheet.create({
  text: {
    fontSize: APP_FONT_SIZE,
    color: CLR_MAIN_THEME,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: CLR_MAIN_THEME,
    padding: PADDING_HORIZONTAL,
  },
});
