import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SignupScreen</Text>
      <Button title="Go to Signin" onPress={() => navigation.navigate('Signin')} />
      <Button title="Go to Main Flow" onPress={() => navigation.navigate('Signin', { isSignedIn: true })} />
    </View>
  )
};

const styles = StyleSheet.create({});

export default SignupScreen;