import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Avatar = ({
  center, imageSource, size, roundImage,
}) => {
  const getImageStyle = () => {
    let imageStyle;
    switch (size) {
      case 'small': {
        imageStyle = roundImage ? styles.smallImageRound : styles.smallImage;
        break;
      }
      case 'large': {
        imageStyle = roundImage ? styles.largeImageRound : styles.largeImage;
        break;
      }
      case 'extra-large': {
        imageStyle = roundImage ? styles.etraLargeImageRound : styles.etraLargeImage;
        break;
      }
      default: {
        imageStyle = roundImage ? styles.mediumImageRound : styles.mediumImage;
      }
    }
    return imageStyle;
  };

  return (
    <View style={[center ? styles.container : null]}>
      <Image resizeMode="contain" style={getImageStyle(size, roundImage)} source={imageSource} />
    </View>
  );
};

Avatar.propTypes = {
  roundImage: PropTypes.bool,
  center: PropTypes.bool,
  imageSource: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large']),
};
Avatar.defaultProps = {
  roundImage: true,
  center: false,
  size: 'medium',
};

export default Avatar;
