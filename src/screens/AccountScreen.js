import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const {signout} = useContext(AuthContext);
  return (
    <View>
      <Text>AccountScreen</Text>
      <Button title="Sign out" onPress={signout} />
    </View>
  )
};

const styles = StyleSheet.create({});

export default AccountScreen;