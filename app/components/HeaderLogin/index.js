import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import styles from './styles';

const HeaderLogin = ({ title, renderIcon, navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.pop()}>
      {renderIcon()}
    </TouchableOpacity>
    <Text style={styles.title}>
      {title}
    </Text>
    <View />
  </View>
);

HeaderLogin.propTypes = {
  title: PropTypes.string,
  renderIcon: PropTypes.func,
  navigation: PropTypes.instanceOf(Object).isRequired,
};

HeaderLogin.defaultProps = {
  title: 'Header',
  renderIcon: () => <Icon name="chevron-left" size={20} color="black" />,
};

export default withNavigation(HeaderLogin);
