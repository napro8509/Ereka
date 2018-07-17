import { USER_LOGIN, USER_LOGOUT, USER_REGISTER_SUCCESS } from 'constants/actionsType';

export const userLogin = () => ({
  type: USER_LOGIN,
});
export const userLogout = () => ({
  type: USER_LOGOUT,
});
export const userRegisterSuccess = () => ({
  type: USER_REGISTER_SUCCESS,
});
