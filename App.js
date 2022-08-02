import { StyleSheet, Text, View } from 'react-native';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import TrackNavigator from './src/navigation/TrackNavigator';

export default function App() {

  return (
    <LocationProvider>
      <AuthProvider>
        <TrackNavigator />
      </AuthProvider>
    </LocationProvider>
  );
};