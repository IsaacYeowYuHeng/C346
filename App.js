import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Movie from './components/Movie';
const AllMovies = () => {
    return (
        <ScrollView>
        <View>
            <Text></Text>
            <Text></Text>
            <Movie title="Doctor Sleep" year={2019} icon_name="skull" poster={require('./img/doctor-sleep.jpg')}/>
            <Movie title="Midway" year={2020} icon_name="person-rifle" poster={require('./img/midway.jpg')}/>
        </View>
        </ScrollView>
    );
};
export default AllMovies;