import { combineReducers } from 'redux';
import auth from './authReducer';
import error from './errorReducers';
import loading from './loadingReducer';

export default combineReducers({ auth, error, loading });
