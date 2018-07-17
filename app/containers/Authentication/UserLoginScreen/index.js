/* eslint react/prop-types: 0 */
// #region import
import React, { Component } from 'react';
import {
  View, Text,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import OverlayImage from 'components/common/OverlayImage';
import HeaderLogin from 'components/HeaderLogin';
import Separator from 'components/common/Separator';
import CustomInput from 'components/common/CustomInput';
import CustomButton from 'components/common/CustomButton';
import Avatar from 'components/common/Avatar';
import CheckBox from 'react-native-check-box';
import DefaultStatusBar from 'components/DefaultStatusBar';

import { APP_FONT_SIZE, STATUS_BAR_HEIGHT } from 'constants/styleConstants';
import { CLR_MAIN_THEME, CLR_WHITE } from 'constants/colors';
import { bgLogin4, avatarLogin } from 'constants/urlImage';
import { USER_OTP_INPUT_SCREEN } from 'constants/routers';
import Api from 'utils/apis/RequestApi';
import styles from './styles';
import { userLogin } from '../../../actions/authActions';
import { showError } from '../../../actions/errorActions';
// #endregion
class UserLoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  // #region internalFunction

  handleSignIn = () => {
    const { navigation, dispatch } = this.props;
    const { username, password } = this.state;
    Api.auth.login({ username, password }).then((res) => {
      console.log(res);
      if (res.code !== 200) {
        dispatch(showError(res.message));
      } else {
        dispatch(userLogin());
        navigation.navigate(USER_OTP_INPUT_SCREEN);
      }
    });
  };

  handleEmailInput = (username) => {
    this.setState({ username });
  };

  handlePasswordInput = (password) => {
    this.setState({ password });
  };

  renderIcon = () => <Icon name="facebook-square" size={20} color="blue" />;

  renderAboveContent() {
    return (
      <View>
        <Avatar imageSource={avatarLogin} roundImage center />
        <CustomInput title="Email/ Số điện thoại" onChangeText={this.handleEmailInput} />
        <Separator spaceHeight={20} />
        <CustomInput
          title="Mật Khẩu"
          secureTextEntry
          inputPlaceHolder="******"
          onChangeText={this.handlePasswordInput}
        />
        <Separator spaceHeight={20} />
        <CheckBox
          style={{ alignItems: 'flex-start' }}
          onClick={() => this.console.log('Hello')}
          isChecked
          rightText="Ghi nhớ"
          checkBoxColor={CLR_MAIN_THEME}
        />
        <Separator spaceHeight={20} />
        <CustomButton
          text="Đăng Nhập"
          backgroundColor={CLR_MAIN_THEME}
          textColor={CLR_WHITE}
          onPress={this.handleSignIn}
          size="large"
          borderColor={CLR_WHITE}
          fontSize={APP_FONT_SIZE}
        />
        <Separator spaceHeight={20} />
        <Text style={styles.forgotPass}>
Quên Mật Khẩu ?
        </Text>
      </View>
    );
  }

  renderBellowContent() {
    return (
      <View style={styles.bellowContent}>
        <CustomButton
          text="Đăng nhập với Facebook"
          backgroundColor={CLR_WHITE}
          textColor={CLR_MAIN_THEME}
          onPress={() => console.log('alo')}
          size="large"
          borderColor={CLR_MAIN_THEME}
          fontSize={APP_FONT_SIZE}
          renderIcon={this.renderIcon}
        />
        <Separator spaceHeight={30} />
        <Text>
          Bạn chưa có tài khoản?
          {' '}
          <Text style={styles.forgotPass}>
Đăng kí
          </Text>
        </Text>
        <Separator spaceHeight={30} />
      </View>
    );
  }

  // #endregion
  render() {
    return (
      <View style={styles.container}>
        <DefaultStatusBar />
        <OverlayImage imageSource={bgLogin4} opacity={0.1} />
        <View style={styles.wrapper}>
          <View style={styles.content}>
            <React.Fragment>
              <Separator spaceHeight={STATUS_BAR_HEIGHT} />
              <HeaderLogin title="Đăng Nhập" />
              <View style={{ padding: 10, justifyContent: 'space-between', flex: 1 }}>
                {this.renderAboveContent()}
                {this.renderBellowContent()}
              </View>
            </React.Fragment>
          </View>
        </View>
      </View>
    );
  }
}

export default connect()(UserLoginScreen);
