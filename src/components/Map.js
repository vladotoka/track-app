import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  let points = [];
  for (let i = 0; i < 10; i++) {
    if(i%2 ===0) {
      points.push({
        latitude: 42.50606 + i * 0.001,
        longitude: 27.46781 + i * 0.001
      });
    } else {
      points.push({
        latitude: 42.50606 - i * 0.0005,
        longitude: 27.46781 + i * 0.001
      });
    }
  }
  return (
    <MapView style={styles.map}
      initialRegion={{
        latitude: 42.50606,
        longitude: 27.46781,
        latitudeDelta: 0.0461,
        longitudeDelta: 0.02105,
      }}
    >
      <Polyline strokeWidth={2} strokeColor="blue" coordinates={points} />
    </MapView>
  )
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;