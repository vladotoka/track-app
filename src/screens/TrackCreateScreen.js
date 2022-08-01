import '../_mockLocation';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { Text } from '@rneui/themed';
import * as Location from 'expo-location';
import { useFocusEffect } from '@react-navigation/native';

import Map from '../components/Map';

const TrackCreateScreen = () => {

  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        throw new Error('Permission to access location was denied');
      }

      await Location.watchPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      },
        (loaction) => console.log(loaction));
    } catch (e) {
      setErr(e.message);
    }
  }

  useEffect(() => {
    startWatching();
  }, []);

  // useFocusEffect(
  //   useCallback(async () => {
  //     const subscribeWatchPosition = await Location.watchPositionAsync({
  //       accuracy: Location.Accuracy.BestForNavigation,
  //       timeInterval: 1000,
  //       distanceInterval: 10
  //     },
  //       (loaction) => console.log(loaction));
  //   }, [])
  // );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text h3>Create a Track</Text>
        <Map />
        {err && <Text>{err}</Text>}
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