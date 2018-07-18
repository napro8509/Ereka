/* eslint no-undef: "off" */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/authSagas';
import rootReducer from '../reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

export default (configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
});
