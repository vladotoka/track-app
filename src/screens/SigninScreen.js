import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SigninScreen = ({route}) => {
  return (
    <View>
      <Text>SigninScreen</Text>
      <Text>{route?.params?.isSignedIn ? '😺' : 'null'}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SigninScreen;