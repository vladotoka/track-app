import {
	StyleSheet,
	Text,
	View,
	Button,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import React, { useCallback, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Context as TrackContext } from '../context/TrackContext';
import { ListItem, Avatar } from '@rneui/themed';
import { ListItemContent } from '@rneui/base/dist/ListItem/ListItem.Content';
import { ListItemTitle } from '@rneui/base/dist/ListItem/ListItem.Title';
import { ListItemChevron } from '@rneui/base/dist/ListItem/ListItem.Chevron';

const TrackListScreen = ({ navigation }) => {
	const { state, fetchTracks } = useContext(TrackContext);

	useFocusEffect(
		useCallback(() => {
			console.log('focus');
			fetchTracks();
		}, [])
	);

	return (
		<View>
			<FlatList
				data={state}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate('TrackDetail', { item })}
					>
						<ListItem>
							<Avatar source={{ uri: 'https://picsum.photos/seed/viks/200' }} />
							<ListItemContent>
								<ListItemTitle>{item.name}</ListItemTitle>
							</ListItemContent>
							<ListItemChevron />
						</ListItem>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default TrackListScreen;
