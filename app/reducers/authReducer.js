import { USER_LOGIN, USER_LOGOUT, USER_LOGIN_SUCCESS } from 'constants/actionsType';
import { USER_REGISTER_SUCCESS } from 'constants/routers';

const initialState = {
  isLogin: false,
  userinfo: {},
  token: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
      };
    }
    case USER_LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        userinfo: action.userinfo,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        isLogin: true,
      };
    default:
      return state;
  }
};

export default auth;
