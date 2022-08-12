import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import TrackNavigator from './src/navigation/TrackNavigator';

export default function App() {
	return (
		<TrackProvider>
			<LocationProvider>
				<AuthProvider>
					<TrackNavigator />
				</AuthProvider>
			</LocationProvider>
		</TrackProvider>
	);
}
