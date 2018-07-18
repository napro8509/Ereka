import { View, StyleSheet } from 'react-native';
import React from 'react';
import ErrorDisplay from 'components/common/ErrorDisplay';
import { Provider } from 'react-redux';
import LoadingComponent from 'components/common/LoadingComponent';
import AuthenticationNavigator from './app/router/AuthenticationNavigator';
import configureStore from './app/store/configureStore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
  },
});

// const rootReducer = combineReducers({ auth, error, loading });
// const sagaMiddleware = createSagaMiddleware();
// const configureStore = () => {
//   const storex = createStore(rootReducer, applyMiddleware(sagaMiddleware));
//   return storex;
// };
// sagaMiddleware.run(rootSaga);
const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={styles.container}>
            <AuthenticationNavigator />
            <ErrorDisplay />
            <View style={styles.overlay}>
              <LoadingComponent />
            </View>
          </View>
        </View>
      </Provider>
    );
  }
}
