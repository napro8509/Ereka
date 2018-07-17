import { ERROR_MESSAGE, DISMISS_ERROR } from 'constants/actionsType';

const initialState = {
  errorList: [],
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_MESSAGE: {
      return {
        ...state,
        errorList: state.errorList.concat([
          { id: new Date(Date.now()).getTime().toString(), message: action.message },
        ]),
      };
    }
    case DISMISS_ERROR: {
      return {
        ...state,
        errorList: state.errorList.filter(e => e.id !== action.id),
      };
    }
    default:
      return state;
  }
};

export default auth;
