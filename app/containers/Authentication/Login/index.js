import React, { Component } from 'react';
import { View, Image, Text, StatusBar } from 'react-native';

import { styles } from './styles';

import { bgLogin1, bgLogin2, bgLogin3,logoImage } from 'constants/urlImage';
import {CLR_CLEAR_BLUE, CLR_WHITE, CLR_MAIN_THEME} from 'constants/colors';
import {APP_FONT_SIZE} from 'constants/styleConstants';

import OverlayImage from 'components/common/OverlayImage';
import CustomButton from 'components/common/CustomButton';
import Separator from 'components/common/Separator';

export default class Login extends React.Component {
    renderBackground() {
        return (<React.Fragment>
            <OverlayImage
                imageSource={bgLogin1}
                resizeMode='cover'
            />

            <OverlayImage
                imageSource={bgLogin3}
            />
        </React.Fragment>)
    };
    renderAboveContent(){
        return(
            <View>
                <Image
                    style={styles.logo}
                    resizeMode='contain'
                    source={logoImage}
                />
                <Text style={styles.title}>Mở ra kho tri thức</Text>
                <Text style={styles.subTitle1}>Hỏi. Chia sẻ. Bàn luận</Text>
                <Text style={styles.subTitle2}>Nhận giải pháp từ chuyên gia.</Text>
            </View>
        );
    }
    onPress(){
        console.log('on click');
    }

    renderBellowContent()
    {
        return(
            <View style={styles.buttonContainer}>
            <CustomButton
            text='Đăng Nhập'
            backgroundColor={CLR_CLEAR_BLUE}
            textColor={CLR_WHITE}
            onPress={this.onPress}
            size='large'
            borderColor={CLR_CLEAR_BLUE}
            fontSize={APP_FONT_SIZE}
            />
            <Separator spaceHeight={10}/>
            <CustomButton
            text='Đăng nhập bằng Facebook '
            backgroundColor={CLR_WHITE}
            textColor={CLR_MAIN_THEME}
            onPress={this.onPress}
            size='large'
            borderColor={CLR_WHITE}
            fontSize={APP_FONT_SIZE}
            />
            <View style={styles.textContainer}>
            <Text style={styles.orText}>hoặc</Text>
            <Text style={styles.registerText}>Đăng kí tài khoản mới</Text>
            </View>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                translucent={true}
                backgroundColor={'transparent'}
                barStyle="light-content"
                />
                {this.renderBackground()}
                {this.renderAboveContent()}
                {this.renderBellowContent()}
            </View>
        );
    }
}