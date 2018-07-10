import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const deriveButtonStyle = ({ size, backgroundColor, borderColor }) => {
    let containerStyle = styles.containerLarge;
    if (size === 'small') {
        containerStyle = styles.containerSmall;
    } else if (size === 'extra-small') {
        containerStyle = styles.containerExtraSmall;
    }
    return [styles.container, containerStyle, { backgroundColor, borderColor }];
}
const CustomButton = ({
    text,
    textColor,
    backgroundColor,
    borderColor,
    fontSize,
    onPress,
    size,
    renderIcon,
}) => {
    return (
        <TouchableOpacity
            style={deriveButtonStyle({ size, backgroundColor, borderColor })}
            onPress={onPress}
        >
            <View style={styles.textContainer}>
                {renderIcon()}
                <Text style={[styles.textStyle, { color: textColor, fontSize }]}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

CustomButton.propTypes={
    text:PropTypes.string,
    textColor:PropTypes.string,
    backgroundColor:PropTypes.string,
    borderColor:PropTypes.string,
    onPress:PropTypes.func,
    size:PropTypes.oneOf(['extra-small','small','large']),
    renderIcon:PropTypes.func,
}

CustomButton.defaultProps={
    text:'Click me!',
    textColor:'black',
    backgroundColor:'green',
    borderColor:'green',
    onPress:()=>{},
    size:'small',
    renderIcon:()=>null
}
export default CustomButton;