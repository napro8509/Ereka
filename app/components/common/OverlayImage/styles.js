import {StyleSheet,Dimensions} from 'react-native';
const {width,height}=Dimensions.get('window');
export const styles=StyleSheet.create({
    container:{
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    },
    image:{
        flex: 1,
        width:undefined ,
        height:undefined,
    }
})