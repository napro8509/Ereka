import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { APP_FONT_SIZE } from 'constants/styleConstants';
import styles from './styles';

const deriveButtonStyle = ({ size, backgroundColor, borderColor }) => {
  let containerStyle = styles.containerLarge;
  if (size === 'small') {
    containerStyle = styles.containerSmall;
  } else if (size === 'extra-small') {
    containerStyle = styles.containerExtraSmall;
  }
  return [styles.container, containerStyle, { backgroundColor, borderColor }];
};
const CustomButton = ({
  text,
  textColor,
  backgroundColor,
  borderColor,
  fontSize,
  onPress,
  size,
  renderIcon,
  spaceBetween,
}) => (
  <TouchableOpacity
    style={deriveButtonStyle({ size, backgroundColor, borderColor })}
    onPress={onPress}
  >
    <View style={styles.textContainer}>
      <View style={{ marginRight: spaceBetween }}>
        {renderIcon()}
      </View>
      <Text style={[styles.textStyle, { color: textColor, fontSize }]}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);

CustomButton.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  spaceBetween: PropTypes.number,
  fontSize: PropTypes.number,
  onPress: PropTypes.func,
  size: PropTypes.oneOf(['extra-small', 'small', 'large']),
  renderIcon: PropTypes.func,
};

CustomButton.defaultProps = {
  text: 'Click me!',
  textColor: 'black',
  backgroundColor: 'green',
  borderColor: 'green',
  spaceBetween: 5,
  fontSize: APP_FONT_SIZE,
  onPress: () => {},
  size: 'small',
  renderIcon: () => null,
};
export default CustomButton;
