import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class OTPInputBox extends React.PureComponent {
  state = {
    num: '',
  };

  focus = () => {
    this.inputRef.focus();
  };

  clear = () => {
    this.setState({ num: '' });
    this.onChangeText('');
  };

  render() {
    const {
      onSubmitEditing, onEndEditing, onChangeText, onDelete, autoFocus,
    } = this.props;
    const { num } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.otpInput}
          value={num}
          maxLength={1}
          underlineColorAndroid="transparent"
          multiline={false}
          onSubmitEditing={onSubmitEditing}
          onEndEditing={onEndEditing}
          autoFocus={autoFocus}
          blurOnSubmit
          keyboardType="numeric"
          onChangeText={(text) => {
            onChangeText(text);
            this.setState({ num: text });
          }}
          ref={(ref) => {
            this.inputRef = ref;
          }}
          onKeyPress={({ nativeEvent: { key }, timeStamp }) => {
            if (key === 'Backspace') {
              if (Math.abs(this.lastKeyEventTimestamp - timeStamp) < 20) {
                return;
              }
              onDelete();
            } else {
              this.lastKeyEventTimestamp = timeStamp;
            }
          }}
        />
      </View>
    );
  }
}

OTPInputBox.propTypes = {
  onSubmitEditing: PropTypes.func,
  onEndEditing: PropTypes.func,
  onChangeText: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool,
};

OTPInputBox.defaultProps = {
  onSubmitEditing: () => {},
  onEndEditing: () => {},
  onChangeText: () => {},
  autoFocus: false,
};

export default OTPInputBox;
