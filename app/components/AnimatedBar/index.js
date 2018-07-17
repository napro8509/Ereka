import React, { Component } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import PropTypes from 'prop-types';
import { CLR_MACARONI_AND_CHEESE, CLR_MAIN_THEME } from 'constants/colors';
import styles from './styles';

class AnimatedBar extends Component {
  componentWillMount() {
    const { progress } = this.props;
    this.animation = new Animated.Value(progress);
  }

  componentDidUpdate(prevProps) {
    const { progress } = this.props;
    if (prevProps.progress !== progress) {
      Animated.timing(this.animation, {
        toValue: progress,
      }).start();
    }
  }

  render() {
    const {
      height, borderColor, borderWidth, borderRadius, barColor, fillColor, row,
    } = this.props;

    const widthInterpolated = this.animation.interpolate({
      inputRange: [0, 0.16, 0.32, 0.48, 0.64, 0.82, 1],
      outputRange: ['0%', '16%', '32%', '48%', '64%', '82%', '100%'],
      extrapolate: 'clamp',
    });

    return (
      <View style={[styles.container, { height }, row ? styles.wrapper : undefined]}>
        <View
          style={{
            flex: 1,
            borderColor,
            borderWidth,
            borderRadius,
          }}
        >
          <View style={[StyleSheet.absoluteFill, { backgroundColor: fillColor }]} />
          <Animated.View
            style={[styles.barStyle, { width: widthInterpolated, backgroundColor: barColor }]}
          />
        </View>
      </View>
    );
  }
}

AnimatedBar.propTypes = {
  progress: PropTypes.number.isRequired,
  height: PropTypes.number,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  barColor: PropTypes.string,
  fillColor: PropTypes.string,
  row: PropTypes.bool,
};

AnimatedBar.defaultProps = {
  height: 10,
  borderColor: CLR_MACARONI_AND_CHEESE,
  borderWidth: 2,
  borderRadius: 4,
  barColor: CLR_MAIN_THEME,
  fillColor: '#FFF',
  row: true,
};

export default AnimatedBar;

// export default class App extends Component {
//   state = {
//     progress: 0,
//   };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState(state => ({
//         progress: state.progress + 0.1,
//       }));
//     }, 500);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.progressContainer}>
//           <Text>
// Load progress:
//           </Text>
//           <ProgressBar row progress={this.state.progress} duration={50} barColor="green" />
//           <Text>
// 100%
//           </Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 250,
//   },
//   progressContainer: {
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
// });
