import { StyleSheet, View, SafeAreaView } from 'react-native';
import React from 'react';
import { Text, Input, Button } from '@rneui/themed';

import Map from '../components/Map';

const TrackCreateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text h3>Create a Track</Text>
        <Map />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default TrackCreateScreen;