import { View, StyleSheet } from 'react-native';
import React from 'react';
import ErrorDisplay from 'components/common/ErrorDisplay';
import { Provider } from 'react-redux';
import AuthenticationNavigator from './app/router/AuthenticationNavigator';
import configureStore from './app/store/configureStore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AuthenticationNavigator />
          <ErrorDisplay />
        </View>
      </Provider>
    );
  }
}
