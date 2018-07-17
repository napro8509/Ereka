import { ERROR_MESSAGE, DISMISS_ERROR } from 'constants/actionsType';

export const showError = message => ({
  type: ERROR_MESSAGE,
  message,
});

export const dismissError = id => ({
  type: DISMISS_ERROR,
  id,
});
