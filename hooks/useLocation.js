import { useState, useEffect } from "react";
import * as Location from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);

    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    throw new Error('Permission to access location was denied');
                }

                subscriber = await Location.watchPositionAsync({
                    accuracy: Location.Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                },
                    callback);
            } catch (e) {
                setErr(e.message);
            }
        };

        if (shouldTrack) {
            startWatching();
        } else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }

        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        }
    }, [shouldTrack, callback]);

    return [err];
};