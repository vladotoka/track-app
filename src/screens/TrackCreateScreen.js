import '../_mockLocation';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import React, { useContext } from 'react';
import { Text } from '@rneui/themed';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../../hooks/useLocation';

import Map from '../components/Map';

const TrackCreateScreen = () => {

  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation);

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