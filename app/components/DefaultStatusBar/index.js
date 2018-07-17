import React, { Component } from 'react';

import { StatusBar } from 'react-native';

export default class DefaultStatusBar extends Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      </React.Fragment>
    );
  }
}
