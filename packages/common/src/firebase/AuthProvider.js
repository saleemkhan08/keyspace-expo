import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
	apiKey: 'AIzaSyDzRyptCKNybRhY0aTCTUbyfl_DPEf_GdU',
	authDomain: 'keyspace-2020.firebaseapp.com',
	databaseURL: 'https://keyspace-2020.firebaseio.com',
	projectId: 'keyspace-2020',
	storageBucket: 'keyspace-2020.appspot.com',
	messagingSenderId: '558633008183',
	appId: '1:558633008183:web:9b26b47f39babf43fa93b2',
	measurementId: 'G-68BLJGV8NW',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const AuthContext = createContext();

export default function AuthProvider(props) {
	const [user, setUser] = useState();
	const [isLoading, setIsLoading] = useState(true);

	const signOut = () => auth.signOut();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((currentuser) => {
			console.log('Auth', currentuser);
			setUser(currentuser);
			setIsLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				isLoading,
				signOut,
				recaptchaViewId,
				signInWithPhoneNumber,
				auth,
			}}>
			{props.children}
		</AuthContext.Provider>
	);
}

export const useAuthContext = () => {
	return useContext(AuthContext);
};
