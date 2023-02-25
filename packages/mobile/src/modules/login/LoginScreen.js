import React, { useState, useRef } from 'react';
import {
	View,
	Text,
	SafeAreaView,
	KeyboardAvoidingView,
	StyleSheet,
	Image,
	TextInput,
	Button,
	Pressable,
} from 'react-native';
import {  firebaseConfig } from '@keyspace/common';

import TextButton from '../../components/buttons/TextButton';
import InputWithIcon from '../../components/inputs/InputWithIcon';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		padding: 40,
		height: '100%',
	},
	logo: {
		flex: 1,
		width: '100%',
		resizeMode: 'contain',
	},
	input: {
		marginBottom: 10,
	},
	userInputContainer: {
		marginBottom: 30,
		marginTop: 30,
		width: '100%',
	},
});

const LoginScreen = () => {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}>
			<Image
				source={require('../../../assets/keyspace2f2f2f.png')}
				style={styles.logo}
			/>
			<View style={styles.userInputContainer}>
				<Text> Sign in with google </Text>
			</View>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;
