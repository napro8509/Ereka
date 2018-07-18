import { INITIAL_LOADING, STOP_LOADING } from 'constants/actionsType';

export const initLoading = () => ({
  type: INITIAL_LOADING,
});
export const stopLoading = () => ({
  type: STOP_LOADING,
});
