import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useContext } from 'react';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {

  const { state } = useContext(LocationContext);
  const { currentLocation } = state;

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
  }

  console.log(state);
  return (
    <MapView style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.0057,
        longitudeDelta: 0.00262,
      }}
    >
      {/* <Polyline strokeWidth={2} strokeColor="blue" coordinates={points} /> */}
      <Circle
        center={currentLocation.coords}
        radius={15}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
    </MapView>
  )
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;