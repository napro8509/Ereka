import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const OverlayView = ({ renderView }) => (
  <View style={styles.container}>
    <View style={styles.wrapper}>
      {renderView()}
    </View>
  </View>
);
OverlayView.propTypes = {
  renderView: PropTypes.func,
};

OverlayView.defaultProps = {
  renderView: () => null,
};

export default OverlayView;
