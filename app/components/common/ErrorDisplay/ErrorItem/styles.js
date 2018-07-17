import { StyleSheet, Dimensions } from 'react-native';
import { CLR_WHITE } from 'constants/colors';
import { APP_FONT_SIZE } from 'constants/styleConstants';

const { width } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    height: 50,
    width,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: CLR_WHITE,
    fontSize: APP_FONT_SIZE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
