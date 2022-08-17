import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useContext } from 'react';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
	const {
		state: { currentLocation, locations },
	} = useContext(LocationContext);

	if (!currentLocation) {
		return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
	}

	return (
		<MapView
			style={styles.map}
			initialRegion={{
				...currentLocation.coords,
				latitudeDelta: 0.0057,
				longitudeDelta: 0.00262,
			}}
		>
			<Circle
				center={currentLocation.coords}
				radius={15}
				strokeColor="rgba(158, 158, 255, 1.0)"
				fillColor="rgba(158, 158, 255, 0.3)"
			/>
			<Polyline
				strokeWidth={2}
				strokeColor="blue"
				coordinates={locations.map((loc) => loc.coords)}
			/>
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
});

export default Map;
