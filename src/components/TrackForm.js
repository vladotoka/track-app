import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { Input, Button } from '@rneui/themed';
import { Context as LocationContext } from '../context/LocationContext';


import Spacer from './Spacer';

const TrackForm = () => {
    const { state: { name, recording, locations },
        changeName,
        startRecording,
        stopRecording
    } = useContext(LocationContext);

    // console.log(locations.length);

    return (
        <View>
            <Spacer>
                {recording ?
                    <Text>recording track: {name}</Text> :
                    <Input value={name} onChangeText={changeName} placeholder="Enter name" />
                }
            </Spacer>
            {recording
                ? <Button title="Stop" onPress={stopRecording} />
                : <Button title="Start Recording" onPress={startRecording} />
            }
            <Text>{locations.length}</Text>
        </View>
    )
};

export default TrackForm;