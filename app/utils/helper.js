import { Platform, StatusBar } from 'react-native';

export const checkSamePassWord = (password, repassword) => {
  if (password === repassword) return true;
  return false;
};
export const checkEmail = (email) => {
  /* eslint-disable-next-line */
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};
export const checkPhoneNumber = (phoneNumber) => {
  /* eslint-disable-next-line */
  const regex = /^0(1\d{9}|9\d{8})$/;
  return regex.test(phoneNumber);
};

export const checkOTPNumber = (OtpNumber) => {
  /* eslint-disable-next-line */
  const regex = /^\d+$/;
  return regex.test(OtpNumber);
};

export const castToInt = (text) => {
  try {
    return parseInt(text, 10);
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

export const statusBarHeight = () => (Platform.OS === 'ios' ? 20 : StatusBar.currentHeight);
