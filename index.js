/** @format */

import { AppRegistry } from 'react-native';
// import App from './App';
// import UserFirstScreen from './app/containers/Authentication/UserFirstScreen';
// import UserLoginScreen from './app/containers/Authentication/UserLoginScreen';
// import UserRegisterScreen from './app/containers/Authentication/UserRegisterScreen';
// import OTPInputBox from './app/components/common/OTPInput/OTPInputBox';
// import UserOTPInputScreen from './app/containers/Authentication/UserOTPInputScreen';
// import OTPInput from './app/components/common/OTPInput';
// import UserRegisterSuccess from './app/containers/Authentication/UserRegisterSuccess';
// import AuthenticationNavigator from './app/router/AuthenticationNavigator';
// import ErrorItem from './app/components/common/ErrorDisplay/ErrorItem';
// import ErrorDisplay from './app/components/common/ErrorDisplay';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
