import { USER_LOGIN, USER_LOGOUT } from 'constants/actionsType';
import { USER_REGISTER_SUCCESS } from 'constants/routers';

const initialState = {
  isLogin: false,
  userinfo: {},
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        isLogin: true,
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
    default:
      return state;
  }
};

export default auth;
