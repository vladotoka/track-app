import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text, Input, Button } from '@rneui/themed';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SignupScreen;