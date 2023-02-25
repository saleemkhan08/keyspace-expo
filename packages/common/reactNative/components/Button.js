import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '../../src/constants';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '50%',
		borderWidth: 1,
		borderColor: colors.primary,
		minHeight: 40,
		minWidth: 100,
	},
});
const Button = ({ children, style }) => {
	return (
		<TouchableOpacity style={{ ...styles.container, ...style }}>
			{children}
		</TouchableOpacity>
	);
};

export default Button;
