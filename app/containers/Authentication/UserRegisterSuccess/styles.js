import { StyleSheet, Dimensions } from 'react-native';
import { PADDING_HORIZONTAL, APP_FONT_SIZE } from 'constants/styleConstants';
import { CLR_MAIN_THEME, CLR_BLACK } from 'constants/colors';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  wrapper: {
    flex: 1,
  },
  containerText: {
    flex: 1,
    paddingHorizontal: 10,
  },
  success: {
    marginTop: height / 4 - 20,
    fontSize: 25,
    color: CLR_MAIN_THEME,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  info: {
    fontSize: APP_FONT_SIZE,
    color: CLR_BLACK,
    textAlign: 'center',
  },
});
