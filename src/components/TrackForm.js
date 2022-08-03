import { View } from 'react-native';
import React from 'react';
import { Input, Button } from '@rneui/themed';


import Spacer from './Spacer';

const TrackForm = () => {
    return (
        <View>
            <Spacer>
                <Input placeholder="Enter name" />
            </Spacer>
            <Button title="Start Recording" onPress={() => { }} />
        </View>
    )
};

export default TrackForm;