import { StyleSheet, Text, View } from 'react-native';
import { Provider as AuthProvider } from './src/context/AuthContext';
import TrackNavigator from './src/navigation/TrackNavigator';


export default function App() {

  return (
    <AuthProvider>
      <TrackNavigator />
    </AuthProvider>
  );
};