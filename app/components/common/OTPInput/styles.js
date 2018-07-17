import { StyleSheet } from 'react-native';
import { CLR_MAIN_THEME } from 'constants/colors';
import { APP_FONT_SIZE, PADDING_HORIZONTAL } from 'constants/styleConstants';

export default StyleSheet.create({
  container: {},
  otpComponent: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  barContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  title: {
    color: CLR_MAIN_THEME,
    fontSize: APP_FONT_SIZE,
    margin: PADDING_HORIZONTAL,
  },
});
