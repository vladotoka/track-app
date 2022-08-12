import { StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
	const { state, signin, clearErrorMessage } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<AuthForm
				headerText="Sign In to TrackMe"
				errorMessage={state.errorMessage}
				onSubmit={signin}
				submitButtonText="Sign In"
			/>
			<NavLink
				navigation={navigation}
				routeName="Signup"
				text="Don't have an account? Create one in seconds"
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

export default SigninScreen;
