import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { Controller } from 'react-hook-form';
import { colors } from '../../constants';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderRadius: 5,
		borderWidth: 1,
		backgroundColor: colors.white,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		flex: 1,
		paddingHorizontal: 10,
		fontSize: 18,
		color: colors.darkBlue,
	},
	label: {
		fontSize: 18,
		fontWeight: '500',
		color: colors.darkGrey,
		marginTop: 5,
		marginBottom: 5,
	},
	hint: {
		width: 60,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
	},
	hintText: {
		fontSize: 18,
		color: colors.white,
	},
	icon: {
		fontSize: 20,
		color: colors.white,
	},
	error: {
		color: colors.red,
		marginBottom: 5,
		paddingVertical: 5,
	},
	disabled: {
		backgroundColor: colors.lightGrey,
		borderRadius: 5,
		borderColor: colors.secondary,
		color: colors.darkGrey,
	},
});

const ControllerInput = (props) => {
	const {
		control,
		defaultValue,
		disabled,
		errorMessage,
		hintIcon,
		hintText,
		label,
		name,
		placeholder,
		showHintOnLeft,
		showHintOnRight,
		keyboardType,
		maxLength,
		multiline,
		numberOfLines,
	} = props;
	const dynamicColor = errorMessage ? colors.red : colors.darkBlue;

	return (
		<Controller
			control={control}
			render={({ field: { onChange, onBlur, value, ref } }) => (
				<>
					<Text style={styles.label}>{label}</Text>
					<View
						style={[
							styles.container,
							{ borderColor: dynamicColor },
							disabled ? styles.disabled : null,
						]}>
						{showHintOnLeft && (
							<View
								style={[
									styles.hint,
									{
										backgroundColor: dynamicColor,
									},
								]}>
								{/* {hintIcon && (
									<Icon
										style={styles.icon}
										name={hintIcon}
										color={colors.secondary}
									/>
								)} */}
								<Text style={styles.hintText}>{hintText}</Text>
							</View>
						)}
						<TextInput
							ref={ref}
							editable={!disabled}
							selectTextOnFocus={!disabled}
							autoCompleteType='off'
							keyboardType={keyboardType}
							style={[
								styles.input,
								disabled ? styles.disabled : null,
								{
									height: multiline ? 50 * numberOfLines : 50,
								},
							]}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value?.toString()}
							placeholder={placeholder}
							placeholderTextColor={colors.darkGrey}
							multiline={multiline}
							numberOfLines={numberOfLines}
							maxLength={maxLength}
						/>
						{showHintOnRight && (
							<View
								style={[
									styles.hint,
									{
										backgroundColor: dynamicColor,
									},
								]}>
								{/* {hintIcon && (
									<Icon
										style={styles.icon}
										name={hintIcon}
										color={colors.secondary}
									/>
								)} */}
								{hintText && <Text style={styles.hintText}>{hintText}</Text>}
							</View>
						)}
					</View>
					<Text style={styles.error}>{errorMessage}</Text>
				</>
			)}
			defaultValue={defaultValue}
			name={name}
		/>
	);
};

ControllerInput.defaultProps = {
	type: 'numeric',
};

export default ControllerInput;
