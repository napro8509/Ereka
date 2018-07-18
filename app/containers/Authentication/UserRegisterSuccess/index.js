import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { bgStars, avatarLogin } from 'constants/urlImage';
import { CLR_MAIN_THEME, CLR_WHITE } from 'constants/colors';

import OverlayImage from 'components/common/OverlayImage';
import OverlayView from 'components/common/OverlayView';
import Separator from 'components/common/Separator';
import Avatar from 'components/common/Avatar';
import CustomButton from 'components/common/CustomButton';
import styles from './styles';

class UserRegisterSuccess extends Component {
  renderMainView = () => (
    <View style={styles.containerText}>
      <Text style={styles.success}>
        Đăng kí thành công !
      </Text>
      <Separator spaceHeight={20} />
      <Text style={styles.info}>
        Dòng thông tin chúc mừng ngừoi dũng đã đăng kí thành công
      </Text>
      <Separator spaceHeight={20} />
      <Avatar
        imageSource={avatarLogin}
        size="extra-large"
        center
      />
      <Separator spaceHeight={40} />
      <CustomButton
        backgroundColor={CLR_MAIN_THEME}
        textColor={CLR_WHITE}
        text="Bắt đầu"
        borderColor={CLR_MAIN_THEME}
        size="large"
      />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <OverlayImage
            imageSource={bgStars}
            resizeMode="contain"
            height="50%"
          />
          <OverlayView
            renderView={this.renderMainView}
          />
        </View>
      </View>
    );
  }
}
export default UserRegisterSuccess;
