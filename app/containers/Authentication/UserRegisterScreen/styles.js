import { StyleSheet } from 'react-native';
import { APP_FONT_SIZE, PADDING_HORIZONTAL } from 'constants/styleConstants';
import { CLR_MAIN_THEME } from 'constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  forgotPass: {
    fontSize: APP_FONT_SIZE,
    color: CLR_MAIN_THEME,
    fontWeight: 'bold',
  },
  mainContent: {
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  bellowContent: {
    padding: 10,
  },
  wrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
  },
  textInfo: {
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  text: {
    fontSize: APP_FONT_SIZE,
    textAlign: 'center',
  },
});
