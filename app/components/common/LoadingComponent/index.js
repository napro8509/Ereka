import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { CLR_CHARCOAL_GREY } from 'constants/colors';
import PropTypes from 'prop-types';
import styles from './styles';

class LoadingComponent extends React.PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    isLoading: false,
  };

  render() {
    console.log('update loadingcomponent');
    // eslint-disable-next-line
    if (!this.props.isLoading) {
      return null;
    }
    const { isLoading } = this.props;
    return (
      <View style={styles.contaner}>
        <ActivityIndicator aminating={isLoading} size="large" color={CLR_CHARCOAL_GREY} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log('day la state trong isloading', state);
  return {
    isLoading: state.loading.isLoading,
  };
}

export default connect(mapStateToProps)(LoadingComponent);
