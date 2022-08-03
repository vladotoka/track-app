import { useState, useEffect } from "react";
import * as Location from 'expo-location';

export default (callback) => {
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                throw new Error('Permission to access location was denied');
            }

            await Location.watchPositionAsync({
                accuracy: Location.Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            },
                callback);
        } catch (e) {
            setErr(e.message);
        }
    }

    useEffect(() => {
        startWatching();
    }, []);

    return [err];
};