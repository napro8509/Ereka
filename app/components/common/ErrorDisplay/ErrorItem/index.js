/* eslint react/prop-types: 0 */
import { Animated, Text, Dimensions } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const { width } = Dimensions.get('window');

class ErrorItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translate: new Animated.Value(width),
      opacity: new Animated.Value(1),
    };
  }

  componentDidMount = () => {
    const { translate, opacity } = this.state;
    Animated.timing(
      // Animate value over time
      translate, // The value to drive
      {
        toValue: 0, // Animate to final value of 0
        duration: 1000,
      },
    ).start(() => {
      setTimeout(() => {
        Animated.timing(
          // Animate value over time
          opacity, // The value to drive
          {
            toValue: 0, // Animate to final value of 1
            duration: 1000,
          },
        ).start(this.dismissError); // Start the animation
      }, 3000);
    }); // Start the animation
  };

  dismissError = () => {
    const { item, onErrorDismiss } = this.props;
    onErrorDismiss(item.id);
  };

  render() {
    const { translate, opacity } = this.state;
    const { item } = this.props;
    return (
      <Animated.View style={[styles.container, { marginLeft: translate, opacity }]}>
        <Text style={styles.errorText}>
          {item.message}
        </Text>
      </Animated.View>
    );
  }
}

ErrorItem.defaultProps = {};
ErrorItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
  onErrorDismiss: PropTypes.func.isRequired,
};

export default ErrorItem;
