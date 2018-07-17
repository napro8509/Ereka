/* eslint no-undef: "off" */
import { createStore, combineReducers } from 'redux';
import auth from '../reducers/authReducer';
import error from '../reducers/errorReducers';

const rootReducer = combineReducers({ auth, error });

export default (configureStore = () => {
  const store = createStore(rootReducer);
  return store;
});
