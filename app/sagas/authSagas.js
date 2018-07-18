import {
  takeLatest, put, call, all,
} from 'redux-saga/effects';
import Api from 'utils/apis/RequestApi';

import { initLoading, stopLoading } from 'actions/loadingActions';
import { userLoginSuccess } from 'actions/authActions';
import { USER_LOGIN } from 'constants/actionsType';
import { showError } from '../actions/errorActions';
import { delay } from '../../node_modules/redux-saga';

function* login({ payload }) {
  console.log('vao login saga');
  try {
    yield put(initLoading());
    const response = yield call([Api.auth, 'login'], payload);
    if (response.token) {
      yield call([Api, 'setToken'], response.token);
      yield call(delay, 2000);
      yield put(userLoginSuccess(response.token));
    } else if (response.code !== 401) {
      yield put(showError(response.message));
    } else {
      yield put(showError('Email/Số điện thoại hoặc mật khẩu không đúng'));
    }
    yield put(stopLoading());
  } catch (error) {
    yield put(stopLoading());
    yield put(showError(error.message));
  }
}

function* watchLoginRequest() {
  yield takeLatest(USER_LOGIN, login);
}

export default function* rootSaga() {
  yield all([watchLoginRequest()]);
}
