import '../_mockLocation';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { Text } from '@rneui/themed';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';

import Map from '../components/Map';

const TrackCreateScreen = ({ navigation }) => {

  const isFocused = useIsFocused();
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);

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