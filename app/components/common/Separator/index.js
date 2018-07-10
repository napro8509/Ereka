import React,{Component} from 'react';
import{View} from 'react-native';
import PropTypes from 'prop-types';


const Separator=({spaceHeight})=>{
    return(
        <View style={{height:spaceHeight}}>
        </View>
    );
}

Separator.propTypes={
    spaceHeight:PropTypes.number,
}

Separator.defaultProps={
    spaceHeight:5
}

export default Separator;