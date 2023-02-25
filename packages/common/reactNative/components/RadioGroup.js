import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import RadioButton from './RadioButton';
import { colors } from '../../constants';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		flexDirection: 'row',
		marginTop: 5,
	},
	verticalContainer: {
		justifyContent: 'flex-start',
		flexDirection: 'column',
		marginTop: 5,
	},
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 15,
	},
	text: {
		color: colors.darkBlue,
		fontSize: 16,
		fontWeight: '400',
		marginTop: 0,
		marginEnd: 10,
	},
	radioButton: {
		marginEnd: 5,
	},
});

const RadioGroup = ({ onItemSelected, items, selectedId, vertical }) => {
	return (
		<View style={vertical ? styles.verticalContainer : styles.container}>
			{items.map((item) => {
				return (
					<View style={styles.buttonContainer} key={item.id}>
						<RadioButton
							style={styles.radioButton}
							onChange={() => onItemSelected(item.id)}
							isSelected={item.id === selectedId}
						/>
						<TouchableOpacity onPress={() => onItemSelected(item.id)}>
							<Text style={styles.text}>{item.text}</Text>
						</TouchableOpacity>
					</View>
				);
			})}
		</View>
	);
};

RadioGroup.defaultProps = {};

export default RadioGroup;
