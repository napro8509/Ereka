import { StyleSheet } from 'react-native';
import { PADDING_HORIZONTAL, APP_FONT_SIZE } from 'constants/styleConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
  buttonContainer: {
    marginHorizontal: 10,
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginTop: 25,
    marginLeft: PADDING_HORIZONTAL,
  },
  title: {
    marginTop: 10,
    marginLeft: PADDING_HORIZONTAL,
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  subTitle1: {
    color: 'white',
    marginTop: 20,
    marginLeft: PADDING_HORIZONTAL,
    fontSize: 18,
  },
  subTitle2: {
    color: 'white',
    marginTop: 5,
    marginLeft: PADDING_HORIZONTAL,
    fontSize: 18,
  },
  orText: {
    color: 'white',
    fontSize: 14,
    marginTop: 10,
  },
  registerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: APP_FONT_SIZE,
    marginTop: 10,
  },
});
