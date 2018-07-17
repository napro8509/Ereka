// import React from 'react';
// import { View, TouchableOpacity, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import PropTypes from 'prop-types';
// import { styles } from './styles';

// export default class CheckBox extends React.Component {
//   static propTypes = {
//     onChecked: PropTypes.func,
//     isChecked: PropTypes.bool,
//     rightText: PropTypes.string,
//   };

//   static defaultProps = {
//     onChecked: () => {},
//     isChecked: false,
//     rightText: 'Ghi nhớ',
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       checked: false,
//     };
//   }

//   componentDidMount = () => {
//     const { isChecked } = this.props;
//     this.setState({ checked: isChecked });
//   };

//   render() {
//     const { rightText } = this.props;
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//           onPress={() => this.setState(preState => ({ checked: !this.state.checked }))}
//         >
//           {isChecked ? (
//             <Icon name="check-square" size={20} color="blue" />
//           ) : (
//             <Icon name="square" size={20} color="blue" />
//           )}
//         </TouchableOpacity>
//         <Text style={styles.text}>
//           {rightText}
//         </Text>
//       </View>
//     );
//   }
// }
