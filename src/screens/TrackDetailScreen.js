import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ route }) => {
	const { state } = useContext(TrackContext);
	
	return (
		<View>
			<Text>Track name: {route.params.item.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
