import { useState, useEffect } from "react";
import * as Location from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);

    const startWatching = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                throw new Error('Permission to access location was denied');
            }

            const subscr = await Location.watchPositionAsync({
                accuracy: Location.Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            },
                callback);
            setSubscriber(subscr);
        } catch (e) {
            setErr(e.message);
        }
    }

    useEffect(() => {
        if (shouldTrack) {
            startWatching();
        } else {
            subscriber?.remove();
            setSubscriber(null);
        }
    }, [shouldTrack, callback]);

    return [err];
};