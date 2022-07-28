import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Context as AuthContext } from '../context/AuthContext';
import AccountScreen from '../screens/AccountScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';


const SignStack = createStackNavigator();
const TrackStack = createStackNavigator();
const MenuBottomTab = createBottomTabNavigator();

function LoginFlow() {
    return (
        <SignStack.Navigator screenOptions={{ headerShown: false }}>
            <SignStack.Screen name="Signup" component={SignupScreen} />
            <SignStack.Screen name="Signin" component={SigninScreen} />
        </SignStack.Navigator>
    )
}

function MainFlow() {
    return (
        <MenuBottomTab.Navigator>
            <MenuBottomTab.Screen name="TrackFlow" component={TrackListFlow} />
            <MenuBottomTab.Screen name="TrackCreate" component={TrackCreateScreen} />
            <MenuBottomTab.Screen name="Account" component={AccountScreen} />
        </MenuBottomTab.Navigator>
    )
}

function TrackListFlow() {
    return (
        <TrackStack.Navigator>
            <TrackStack.Screen name="TrackList" component={TrackListScreen} />
            <TrackStack.Screen name="TrackDetail" component={TrackDetailScreen} />
        </TrackStack.Navigator>
    )
}


const TrackNavigation = () => {
    const { state } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {!state.token ? <>
                <LoginFlow />
            </> : <>
                <MainFlow />
            </>}
        </NavigationContainer>
    );
};

export default TrackNavigation;