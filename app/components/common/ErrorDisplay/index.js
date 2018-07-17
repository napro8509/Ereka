/* eslint react/prop-types: 0 */
import { FlatList, View } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrorItem from 'components/common/ErrorDisplay/ErrorItem';
import { dismissError } from '../../../actions/errorActions';
import styles from './styles';

class ErrorDisplay extends Component {
  // state = {
  //   source: [],
  // };

  // addError = () => {
  //   const { source } = this.state;
  //   const a = source;
  //   a.push(1);
  //   this.setState({ source: a });
  // };

  handleErrorDismiss = (errorId) => {
    const { dispatch } = this.props;
    dispatch(dismissError(errorId));
  };

  render() {
    const { errorList } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={errorList}
          renderItem={({ item }) => (
            <ErrorItem item={item} onErrorDismiss={this.handleErrorDismiss} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

ErrorDisplay.propTypes = {
  errorList: PropTypes.instanceOf(Array),
};
ErrorDisplay.defaultProps = {
  errorList: [],
};

function mapStateToProps(state) {
  return {
    errorList: state.error.errorList,
  };
}

export default connect(mapStateToProps)(ErrorDisplay);
