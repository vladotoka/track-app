import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Context as AuthContext } from '../context/AuthContext';
import AccountScreen from '../screens/AccountScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';
import ResolveAuthScreen from '../screens/ResolveAuthScreen';


const SignStack = createStackNavigator();
const TrackStack = createStackNavigator();
const MenuBottomTab = createBottomTabNavigator();

function LoginFlow() {
    return (
        <SignStack.Navigator screenOptions={{ headerShown: false }}>
            <SignStack.Screen name="ResolveAuth" component={ResolveAuthScreen} />
            <SignStack.Screen name="Signup" component={SignupScreen} />
            <SignStack.Screen name="Signin" component={SigninScreen} />
        </SignStack.Navigator>
    )
}

function MainFlow() {
    return (
        <MenuBottomTab.Navigator>
            <MenuBottomTab.Screen
                name="TrackFlow"
                component={TrackListFlow}
                options={{
                    tabBarLabel: 'Tracks',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="map-marker-path" color={color} size={size} />
                    ),
                }} />
            <MenuBottomTab.Screen
                name="TrackCreate"
                component={TrackCreateScreen}
                options={{
                    tabBarLabel: 'New track',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="map-marker-plus" color={color} size={size} />
                    ),
                }} />
            <MenuBottomTab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }} />
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
        <NavigationContainer ref={navigationRef}>
            {!state.token ? <>
                <LoginFlow />
            </> : <>
                <MainFlow />
            </>}
        </NavigationContainer>
    );
};

export default TrackNavigation;