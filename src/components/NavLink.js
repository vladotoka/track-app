import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Spacer from './Spacer';


const NavLink = ({ navigation, routeName, text, clearErrorMessage }) => {
    const handlePress = () => {
        if (clearErrorMessage) { clearErrorMessage(); }
        navigation.navigate(routeName);
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Spacer>
                <Text style={styles.link}>{text}</Text>
            </Spacer>
        </TouchableOpacity>

    )
}

export default NavLink;

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});