import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, fontSize } from '@keyspace/common';

const styles = StyleSheet.create({
	button: {
		height: 50,
		borderRadius: 25,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		textAlign: 'center',
		fontSize: fontSize.md,
	},
	primaryButton: {
		backgroundColor: colors.darkBlue,
	},
	primaryText: {
		color: colors.white,
	},
});

export default ({ onClick, type, title, style: customStyles }) => {
	const buttonStyles = styles[`${type}Button`];
	const textStyles = styles[`${type}Text`];
	return (
		<TouchableOpacity
			onPress={onClick}
			style={{ ...styles.button, ...buttonStyles, ...customStyles }}>
			<Text
				style={{
					...styles.text,
					...textStyles,
				}}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};
