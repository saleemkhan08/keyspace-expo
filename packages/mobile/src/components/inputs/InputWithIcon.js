import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors, fontSize } from '@keyspace/common';

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 50,
		width: '100%',
		borderWidth: 1,
		borderRadius: 25,
		paddingStart: 15,
		borderColor: colors.darkGrey,
	},
	input: {
		flex: 1,
		paddingStart: 10,
		paddingEnd: 10,
		fontSize: fontSize.md,
		color: colors.primary,
	},
});

export default ({
	onChangeText,
	keyboardType,
	style: customStyles,
	iconName,
	value,
}) => {
	return (
		<View style={{ ...styles.inputContainer, ...customStyles }}>
			<Ionicons name={iconName} size={25} color={colors.primary} />
			<TextInput
				autoCompleteType='off'
				keyboardType={keyboardType}
				style={styles.input}
				onChangeText={onChangeText}
				value={value}
				placeholder='Enter your Number'
				placeholderTextColor={colors.darkGrey}
			/>
		</View>
	);
};
