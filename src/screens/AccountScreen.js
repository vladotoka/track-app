import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <View>
      <Text>AccountScreen</Text>
      <Spacer>
        <Button title="Sign out" onPress={signout} />
      </Spacer>
    </View>
  )
};

const styles = StyleSheet.create({});

export default AccountScreen;