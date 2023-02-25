import React from 'react';
import RadioGroup from './RadioGroup';
import { View, Text, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';
import { colors } from '../../constants';

const styles = StyleSheet.create({
	label: {
		fontSize: 18,
		fontWeight: '500',
		color: colors.darkGrey,
		marginTop: 5,
		marginBottom: 5,
	},
	verticalContainer: {
		flexDirection: 'column',
	},
	error: {
		color: colors.red,
		marginBottom: 5,
		paddingVertical: 5,
	},
});

const TypePicker = ({
	control,
	name,
	defaultValue,
	options,
	label,
	vertical,
	errorMessage,
}) => {
	return (
		<Controller
			control={control}
			render={({ field: { onChange, value } }) => (
				<View>
					<Text style={styles.label}>{label}</Text>
					<RadioGroup
						vertical={vertical}
						items={options}
						onItemSelected={onChange}
						selectedId={value}
						errorMessage={errorMessage}
					/>
					<Text style={styles.error}>{errorMessage}</Text>
				</View>
			)}
			name={name}
			defaultValue={defaultValue}
		/>
	);
};

export default TypePicker;
