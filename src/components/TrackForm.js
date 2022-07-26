import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { Input, Button } from '@rneui/themed';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

import Spacer from './Spacer';

const TrackForm = () => {
	const {
		state: { name, recording, locations },
		changeName,
		startRecording,
		stopRecording,
	} = useContext(LocationContext);
	const [saveTrack] = useSaveTrack();

	return (
		<View>
			<Spacer>
				{recording ? (
					<Text>Recording track {name}</Text>
				) : (
					<Input
						value={name}
						onChangeText={changeName}
						placeholder="Enter name"
					/>
				)}
			</Spacer>
			<Spacer>
				{recording ? (
					<Button title="Stop" onPress={stopRecording} />
				) : (
					<Button title="Start Recording" onPress={startRecording} />
				)}
			</Spacer>
			<Spacer>
				{!recording && locations.length ? (
					<Button title="Save Recording" onPress={saveTrack} />
				) : null}
			</Spacer>
			<Text>Recorded points: {locations.length}</Text>
		</View>
	);
};

export default TrackForm;
