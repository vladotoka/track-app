import { StyleSheet, Text, View } from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

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




export default function App({ route }) {
  const isSignedIn = route?.params?.isSignedIn ?? false;

  return (
    <AuthProvider>
      <NavigationContainer>
        {!isSignedIn ? (
          <>
            <LoginFlow />
          </>
        ) : (
          <>
            <MainFlow />
          </>
        )}
      </NavigationContainer>
    </AuthProvider>
  );
}