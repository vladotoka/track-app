import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ route }) => {
	const { state } = useContext(TrackContext);
	const track = state.find((tr) => (tr._id === route.params._id));
	const indexOfLastLocation = track.locations.length - 1;
	const initialCoordinates = track.locations[0].coords;
	console.log(track);
	return (
		<View>
			<Text style={styles.title}>{track.name}</Text>
			<Text>id:{route.params._id}</Text>
			<MapView
				style={styles.map}
				initialRegion={{
					...initialCoordinates,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			>
				<Polyline
					strokeWidth={2}
					strokeColor="blue"
					coordinates={track.locations.map((loc) => loc.coords)}
				/>
			</MapView>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 26,
	},
	map: {
		height: 300,
	},
});

export default TrackDetailScreen;
