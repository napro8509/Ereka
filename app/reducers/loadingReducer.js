import { INITIAL_LOADING, STOP_LOADING } from 'constants/actionsType';

const initialState = {
  isLoading: false,
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_LOADING:
      return {
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loading;
