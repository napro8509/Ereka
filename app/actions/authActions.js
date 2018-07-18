import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
} from 'constants/actionsType';

export const userLogin = (username, password) => ({
  type: USER_LOGIN,
  payload: { username, password },
});
export const userLogout = () => ({
  type: USER_LOGOUT,
});
export const userRegisterSuccess = () => ({
  type: USER_REGISTER_SUCCESS,
});
export const userLoginSuccess = token => ({
  type: USER_LOGIN_SUCCESS,
  token,
});
