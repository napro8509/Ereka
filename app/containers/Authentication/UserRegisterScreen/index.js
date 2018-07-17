/* eslint react/prop-types: 0 */
import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Separator from 'components/common/Separator';
import HeaderLogin from 'components/HeaderLogin';
import Avatar from 'components/common/Avatar';
import DefaultStatusBar from 'components/DefaultStatusBar';
import OverlayImage from 'components/common/OverlayImage';
import CustomButton from 'components/common/CustomButton';
import CustomInput from 'components/common/CustomInput';

import { APP_FONT_SIZE, STATUS_BAR_HEIGHT } from 'constants/styleConstants';
import { CLR_MAIN_THEME, CLR_WHITE } from 'constants/colors';
import { avatarLogin, bgLogin4 } from 'constants/urlImage';
import { USER_OTP_INPUT_SCREEN } from 'constants/routers';
import { checkSamePassWord, checkPhoneNumber } from 'utils/helper';
import Api from 'utils/apis/RequestApi';

import styles from './styles';

class UserRegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: 0,
      password: '',
      repassword: '',
    };
  }

  handleContinue = () => {
    const { navigation } = this.props;
    const { phoneNumber, password, repassword } = this.state;
    if (!checkPhoneNumber(phoneNumber)) console.log('');
    if (!checkSamePassWord(password, repassword)) return;
    Api.auth
      .register({
        username: phoneNumber,
        password,
      })
      .then(res => console.log('Gui thanh cong', res))
      .catch(error => console.log('Bi loi', error));
    navigation.navigate(USER_OTP_INPUT_SCREEN, {
      username: phoneNumber,
    });
  };

  handlePhoneInput = (phoneNumber) => {
    this.setState({
      phoneNumber,
    });
  };

  handlePasswordInput = (password) => {
    this.setState({
      password,
    });
  };

  handlePasswordreEnter = (repassword) => {
    this.setState({
      repassword,
    });
  };

  renderIcon = () => <Icon name="facebook-square" size={20} color="blue" />;

  renderRegisterInput() {
    return (
      <View style={styles.mainContent}>
        <CustomInput
          title="Email/ Số điện thoại"
          onChangeText={this.handlePhoneInput}
        />
        <Separator spaceHeight={20} />
        <CustomInput
          title="Mật khẩu"
          secureTextEntry
          inputPlaceHolder="******"
          onChangeText={this.handlePasswordInput}
        />
        <Separator spaceHeight={20} />
        <CustomInput
          title="Xác nhận mật khẩu"
          secureTextEntry
          inputPlaceHolder="******"
          onChangeText={this.handlePasswordreEnter}
        />
        <Separator spaceHeight={20} />
        <CustomButton
          text="Tiếp tục"
          backgroundColor={CLR_MAIN_THEME}
          textColor={CLR_WHITE}
          onPress={this.handleContinue}
          size="large"
          borderColor={CLR_WHITE}
          fontSize={APP_FONT_SIZE}
        />
      </View>
    );
  }

  renderAboveContent() {
    return (
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <Separator spaceHeight={STATUS_BAR_HEIGHT} />
        <HeaderLogin title="Đăng kí tài khoản" />
        <Separator spaceHeight={40} />
        <Avatar imageSource={avatarLogin} roundImage center />
        <View style={styles.textInfo}>
          <Text style={styles.text}>
            Hệ thống đang trong giai đoạn thử nghiệm,
            vui lòng sử dụng số điện thoại Viettel để đăng
            ký.
          </Text>
        </View>
        <Separator spaceHeight={20} />
        {this.renderRegisterInput()}
        <View style={styles.bellowContent}>
          <CustomButton
            text="Đăng nhập với Facebook"
            backgroundColor={CLR_WHITE}
            textColor={CLR_MAIN_THEME}
            onPress={this.onPress}
            size="large"
            borderColor={CLR_MAIN_THEME}
            fontSize={APP_FONT_SIZE}
            renderIcon={this.renderIcon}
          />
          <Separator spaceHeight={30} />
          <Text>
            Bạn đã có tài khoản ?
            <Text style={styles.forgotPass}>
Đăng nhập
            </Text>
          </Text>
          <Separator spaceHeight={30} />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <DefaultStatusBar />
        <KeyboardAvoidingView style={styles.container} enable>
          <OverlayImage imageSource={bgLogin4} opacity={0.05} />
        </KeyboardAvoidingView>
        <View style={styles.wrapper}>
          <View style={styles.content}>
            {this.renderAboveContent()}
          </View>
        </View>
      </View>
    );
  }
}

export default UserRegisterScreen;
