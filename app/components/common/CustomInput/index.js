import React from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CustomInput = ({
  titleStyle,
  title,
  inputPlaceHolder,
  inputStyle,
  keyboardType,
  onChangeText,
  onSubmitEditting,
  secureTextEntry,
}) => (
  <View style={styles.container}>
    <Text style={[titleStyle, styles.text]}>
      {title}
    </Text>
    <TextInput
      placeholder={inputPlaceHolder}
      style={[inputStyle, styles.input]}
      keyboardType={keyboardType}
      onChangeText={text => onChangeText(text)}
      onSubmitEditting={onSubmitEditting}
      underlineColorAndroid="transparent"
      secureTextEntry={secureTextEntry}
    />
  </View>
);

CustomInput.propTypes = {
  title: PropTypes.string,
  titleStyle: PropTypes.instanceOf(Object),
  inputPlaceHolder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  inputStyle: PropTypes.instanceOf(Object),
  onChangeText: PropTypes.func,
  onSubmitEditting: PropTypes.func,
  keyboardType: PropTypes.oneOf(['default', 'numeric', 'email-address', 'phone-pad']),
};
CustomInput.defaultProps = {
  title: 'Tiêu đề Input',
  titleStyle: {},
  inputPlaceHolder: 'Place holoder',
  inputStyle: {},
  keyboardType: 'default',
  secureTextEntry: false,
  onChangeText: () => {},
  onSubmitEditting: () => {},
};

export default CustomInput;
