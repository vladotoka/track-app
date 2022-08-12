import '../_mockLocation';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import React, { useContext, useCallback } from 'react';
import { Text } from '@rneui/themed';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';

import Map from '../components/Map';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ navigation }) => {

  const isFocused = useIsFocused();
  const { state: { recording }, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording],
  );

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text h3>Create a Track</Text>
        <Map />
        {err && <Text>{err}</Text>}
        <TrackForm />
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