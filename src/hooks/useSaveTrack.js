import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import * as RootNavigation from '../navigation/RootNavigation';

export default () => {
	const { createTrack } = useContext(TrackContext);
	const {
		state: { locations, name },
		reset,
	} = useContext(LocationContext);

	const saveTrack = () => {
		createTrack(name, locations);
		reset();
		RootNavigation.navigate('TrackList');
	};

	return [saveTrack];
};
