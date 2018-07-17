import { StyleSheet } from 'react-native';
import { CLR_MAIN_THEME } from 'constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
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
  text: {
    textAlign: 'center',
  },
  reSend: {
    color: CLR_MAIN_THEME,
  },
  textInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  phoneNumber: {
    fontWeight: 'bold',
    margin: 10,
  },
});
