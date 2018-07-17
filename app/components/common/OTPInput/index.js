import React from 'react';
import { View, FlatList, TextInput } from 'react-native';
import AnimatedBar from 'components/AnimatedBar';
import { CLR_MAIN_THEME } from 'constants/colors';
import OTPInputBox from 'components/common/OTPInput/OTPInputBox';
import PropTypes from 'prop-types';
import styles from './styles';

class OTPInput extends React.PureComponent {
  otp = '';

  otp1 = '';

  otp2 = '';

  otp3 = '';

  otp4 = '';

  otp5 = '';

  otp6 = '';

  state = {
    progress: 0,
  };

  onChangeText = (index, text) => {
    this[`otp${index}`] = text;
    if (text !== '' && index < 6) this.jumpToBox(index + 1);
    this.getOTP();
  };

  getOTP = () => {
    const { onChangeText } = this.props;
    this.otp = `${this.otp1}${this.otp2}${this.otp3}${this.otp4}${this.otp5}${this.otp6}`;
    this.setState({ progress: this.otp.length / 6 });
    onChangeText(this.otp);
  };

  handleDelete = (index) => {
    if (index > 1) {
      this[`otp${index}`] = '';
      this.jumpToBox(index - 1);
    }
  };

  handleSubmitEditing = (index) => {
    if (this[`otp${index}`] !== '' && index < 6) {
      this.jumpToBox(index + 1);
    }
  };

  jumpToBox = (index) => {
    this[`refInput${index}`].focus();
  };

  autoFocus = (index) => {
    if (index === 1) return true;
    return false;
  };

  render() {
    const { progress } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TextInput style={styles.title}>
Mã xác nhận
          </TextInput>
          <FlatList
            style={styles.otpComponent}
            data={[1, 2, 3, 4, 5, 6]}
            horizontal
            keyExtractor={index => index.toString()}
            renderItem={({ index }) => (
              <OTPInputBox
                onSubmitEditing={() => this.handleSubmitEditing(index + 1)}
                onChangeText={text => this.onChangeText(index + 1, text)}
                onDelete={() => this.handleDelete(index + 1)}
                ref={(refNum) => {
                  this[`refInput${index + 1}`] = refNum;
                }}
                autoFocus={this.autoFocus(index + 1)}
              />
            )}
          />
        </View>
        <View />
        <View style={styles.barContainer}>
          <AnimatedBar
            row
            progress={progress}
            duration={50}
            barColor={CLR_MAIN_THEME}
            borderColor={CLR_MAIN_THEME}
          />
        </View>
      </View>
    );
  }
}

OTPInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
};

export default OTPInput;
