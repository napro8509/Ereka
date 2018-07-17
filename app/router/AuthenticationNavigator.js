import { createStackNavigator } from 'react-navigation';
import {
  USER_OTP_INPUT_SCREEN,
  USER_REGISTER_SCREEN,
  USER_LOGIN_SCREEN,
  USER_FIRST_SCREEN,
  USER_REGISTER_SUCCESS,
} from 'constants/routers';
import UserRegisterSuccess from 'containers/Authentication/UserRegisterSuccess';
import UserLoginScreen from 'containers/Authentication/UserLoginScreen';
import UserFirstScreen from 'containers/Authentication/UserFirstScreen';
import UserOTPInputScreen from 'containers/Authentication/UserOTPInputScreen';
import UserRegisterScreen from 'containers/Authentication/UserRegisterScreen';

export default createStackNavigator(
  {
    [USER_OTP_INPUT_SCREEN]: UserOTPInputScreen,
    [USER_REGISTER_SCREEN]: UserRegisterScreen,
    [USER_LOGIN_SCREEN]: UserLoginScreen,
    [USER_FIRST_SCREEN]: UserFirstScreen,
    [USER_REGISTER_SUCCESS]: UserRegisterSuccess,
  },
  {
    initialRouteName: USER_FIRST_SCREEN,
    headerMode: 'node',
  },
);
