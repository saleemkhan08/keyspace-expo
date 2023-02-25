import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/modules/home/HomeScreen';
import LoginScreen from './src/modules/login/LoginScreen';
import { HOME_SCREEN, LOGIN_SCREEN } from './src/routes';

const AppStack = createNativeStackNavigator();

const AppRoute = () => {
	// const { user } = useContext(AuthContext);
	const user = null;
	return (
		<AppStack.Navigator initialRouteName={LOGIN_SCREEN}>
			{user ? (
				<AppStack.Screen
					name={HOME_SCREEN}
					component={HomeScreen}
					options={{
						headerShown: false,
					}}
				/>
			) : (
				<AppStack.Screen
					name={LOGIN_SCREEN}
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
			)}
		</AppStack.Navigator>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<AppRoute />
		</NavigationContainer>
	);
}
