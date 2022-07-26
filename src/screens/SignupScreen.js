import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Text, Input, Button } from '@rneui/themed';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}

      />

      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  }
});

export default SignupScreen;
