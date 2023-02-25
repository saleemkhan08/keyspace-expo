import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import AccountInfoForm from './src/modules/account-info/AccountInfoForm';
import BankDetailsForm from './src/modules/bank-details/BankDetailsForm';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
			<BankDetailsForm />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
