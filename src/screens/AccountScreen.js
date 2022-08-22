import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
	const { state, signout } = useContext(AuthContext);
	return (
		<View>
			<Text>App version 1.0.4</Text>
			{state.email && <Text>user email: {state.email}</Text>}
			<Spacer>
				<Button title="Sign out" onPress={signout} />
			</Spacer>
		</View>
	);
};

const styles = StyleSheet.create({});

export default AccountScreen;
