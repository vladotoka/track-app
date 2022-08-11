import { useContext } from "react";
import { Context as TrackContext } from "../src/context/TrackContext";
import { Context as LocationContext } from "../src/context/LocationContext";

export default () => {
    const { createTrack } = useContext(TrackContext);
    const { state: { locations, name } } = useContext(LocationContext); // destruction may crash

    const saveTrack = () => {
        createTrack(name, locations);
    };

    return [saveTrack];
};