import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Spacer from './Spacer';

const NavLink = ({ navigation, routeName, text }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
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