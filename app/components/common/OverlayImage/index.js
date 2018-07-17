import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const OverlayImage = ({
  width, height, top, left, imageSource, resizeMode, opacity,
}) => (
  <View
    style={[
      styles.container,
      {
        width,
        height,
        top,
        left,
      },
    ]}
  >
    <Image style={[styles.image, { opacity }]} source={imageSource} resizeMode={resizeMode} />
  </View>
);
OverlayImage.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  top: PropTypes.number,
  left: PropTypes.number,
  imageSource: PropTypes.number,
  opacity: PropTypes.number,
  resizeMode: PropTypes.oneOf(['contain', 'cover', 'stretch']),
};

OverlayImage.defaultProps = {
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  imageSource: 0,
  opacity: 1,
  resizeMode: 'contain',
};

export default OverlayImage;
