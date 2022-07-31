import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const Map = () => {
  return (
    <MapView style={styles.map}
    initialRegion={{
      latitude: 42.50606,
      longitude: 27.46781,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
  )
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;