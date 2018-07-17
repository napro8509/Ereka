import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLarge: {
    height: 48,
    borderRadius: 24,
  },
  containerSmall: {
    height: 32,
    borderRadius: 16,
    paddingLeft: 14,
    paddingRight: 14,
  },
  containerExtraSmall: {
    height: 24,
    borderRadius: 12,
    paddingLeft: 8,
    paddingRight: 8,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
  },
});
