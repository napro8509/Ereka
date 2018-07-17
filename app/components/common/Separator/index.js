import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Separator = ({ spaceHeight }) => <View style={{ height: spaceHeight }} />;

Separator.propTypes = {
  spaceHeight: PropTypes.number,
};

Separator.defaultProps = {
  spaceHeight: 5,
};

export default Separator;
