import { StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
	const { state, signup, clearErrorMessage } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<AuthForm
				headerText="Sign Up for TrackMe"
				errorMessage={state.errorMessage}
				onSubmit={signup}
				submitButtonText="Sign Up"
			/>
			<NavLink
				navigation={navigation}
				routeName="Signin"
				text="Already have an account? Sign in instead"
				clearErrorMessage={clearErrorMessage}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
});

export default SignupScreen;
