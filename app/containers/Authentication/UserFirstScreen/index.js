/* eslint react/prop-types: 0 */

import React from 'react';
import {
  View, Image, Text, StatusBar, TouchableOpacity,
} from 'react-native';

import { bgLogin1, bgLogin3, logoImage } from 'constants/urlImage';
import { CLR_CLEAR_BLUE, CLR_WHITE, CLR_MAIN_THEME } from 'constants/colors';
import { APP_FONT_SIZE } from 'constants/styleConstants';

import OverlayImage from 'components/common/OverlayImage';
import CustomButton from 'components/common/CustomButton';
import Separator from 'components/common/Separator';

import Icon from 'react-native-vector-icons/FontAwesome';
import { USER_LOGIN_SCREEN, USER_REGISTER_SCREEN } from 'constants/routers';
import styles from './styles';

export default class UserFirstScreen extends React.Component {
  handleSignIn = () => {
    const { navigation } = this.props;
    navigation.navigate(USER_LOGIN_SCREEN);
  };

  goToRegister = () => {
    const { navigation } = this.props;
    navigation.navigate(USER_REGISTER_SCREEN);
  };

  renderBackground = () => (
    <React.Fragment>
      <OverlayImage imageSource={bgLogin1} resizeMode="cover" />
      <OverlayImage imageSource={bgLogin3} />
    </React.Fragment>
  );

  renderAboveContent = () => (
    <View>
      <Image style={styles.logo} resizeMode="contain" source={logoImage} />
      <Text style={styles.title}>
Mở ra kho tri thức
      </Text>
      <Text style={styles.subTitle1}>
Hỏi.Chia sẻ.Bàn luận
      </Text>
      <Text style={styles.subTitle2}>
Nhận giải pháp từ chuyên gia.
      </Text>
    </View>
  );

  renderIcon = () => <Icon name="facebook-square" size={20} color="blue" />;

  renderBellowContent = () => (
    <View style={styles.buttonContainer}>
      <CustomButton
        text="Đăng Nhập"
        backgroundColor={CLR_CLEAR_BLUE}
        textColor={CLR_WHITE}
        onPress={this.handleSignIn}
        size="large"
        borderColor={CLR_CLEAR_BLUE}
        fontSize={APP_FONT_SIZE}
      />
      <Separator spaceHeight={10} />
      <CustomButton
        text="Đăng nhập bằng Facebook "
        backgroundColor={CLR_WHITE}
        textColor={CLR_MAIN_THEME}
        onPress={this.handleSignIn}
        size="large"
        borderColor={CLR_WHITE}
        fontSize={APP_FONT_SIZE}
        renderIcon={this.renderIcon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.orText}>
hoặc
        </Text>
        <TouchableOpacity onPress={this.goToRegister}>
          <Text style={styles.registerText}>
Đăng kí tài khoản mới
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        {this.renderBackground()}
        {this.renderAboveContent()}
        {this.renderBellowContent()}
      </View>
    );
  }
}
