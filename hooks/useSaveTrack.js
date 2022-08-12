import { useContext } from "react";
import { Context as TrackContext } from "../src/context/TrackContext";
import { Context as LocationContext } from "../src/context/LocationContext";
import * as RootNavigation from '../src/navigation/RootNavigation';

export default () => {
    const { createTrack } = useContext(TrackContext);
    const { state: { locations, name }, reset } = useContext(LocationContext); // destruction may crash

    const saveTrack = () => {
        createTrack(name, locations);
        reset();
        RootNavigation.navigate('TrackList');

    };

    return [saveTrack];
};