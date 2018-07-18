/* eslint react/prop-types: 0 */
// #region import
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import DefaultStatusBar from 'components/DefaultStatusBar';
import OverlayImage from 'components/common/OverlayImage';
import CustomButton from 'components/common/CustomButton';

import Separator from 'components/common/Separator';
import HeaderLogin from 'components/HeaderLogin';
import OTPInput from 'components/common/OTPInput';

import { bgLogin4 } from 'constants/urlImage';
import { APP_FONT_SIZE, STATUS_BAR_HEIGHT } from 'constants/styleConstants';
import { CLR_MAIN_THEME, CLR_WHITE } from 'constants/colors';
import { checkOTPNumber, castToInt } from 'utils/helper';
import { USER_REGISTER_SUCCESS } from 'constants/routers';
import Api from 'utils/apis/RequestApi';
import styles from './styles';
import { showError } from '../../../actions/errorActions';
// #endregion
class UserOTPInputScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      username: '',
    };
  }

  componentDidMount = () => {
    const { navigation } = this.props;
    const username = navigation.getParam('username');
    this.setState({ username });
  };

  // #region internalFunction

  onPress = () => {
    const { dispatch, navigation } = this.props;
    const { username, otp } = this.state;
    if (otp.length !== 6) {
      dispatch(showError('Vui lòng nhập đủ 6 kí tự'));
    } else if (!checkOTPNumber(otp)) dispatch(showError('Vui lòng nhập kí tự số'));
    else {
      Api.auth.activeUser({ username, otp: castToInt(otp) })
        .then(res => console.log(res));
      navigation.navigate(USER_REGISTER_SUCCESS);
      console.log(navigation);
    }
  };

  handleInputOTP = (text) => {
    this.setState({ otp: text });
  };

  renderAboveContent = () => (
    <View style={{ flex: 1 }}>
      <Separator spaceHeight={STATUS_BAR_HEIGHT} />
      <HeaderLogin title="Xác nhận mã đăng kí" />
      <Separator spaceHeight={40} />
      <View style={styles.textInfo}>
        <View>
          <Text style={styles.text}>
            Nhập mã xác nhận được gửi đến số điện thoại
            <Text style={styles.phoneNumber}>
            `0958412354`
            </Text>
            để hoàn tất quá trình đăng kí
          </Text>
          <Separator spaceHeight={40} />
          <OTPInput onChangeText={this.handleInputOTP} />
          <Separator spaceHeight={20} />
          <Text style={{ marginLeft: 10 }}>
            Không nhận được mã ?
            <Text style={styles.reSend}>
            Gửi lại
            </Text>
          </Text>
        </View>
        <CustomButton
          text="Tiếp tục"
          backgroundColor={CLR_MAIN_THEME}
          textColor={CLR_WHITE}
          onPress={this.onPress}
          size="large"
          borderColor={CLR_WHITE}
          fontSize={APP_FONT_SIZE}
        />
      </View>
      <Separator spaceHeight={20} />
    </View>
  );

  // #endregion
  render() {
    return (
      <View style={styles.container}>
        <DefaultStatusBar />
        <OverlayImage imageSource={bgLogin4} opacity={0.05} />
        <View style={styles.wrapper}>
          <View style={styles.content}>
            {this.renderAboveContent()}
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { isLogined: state };
}

export default connect(mapStateToProps)(UserOTPInputScreen);
