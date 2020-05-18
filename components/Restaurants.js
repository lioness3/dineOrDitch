
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import Dates from './Dates';
import { createStackNavigator } from '@react-navigation/stack';



export default function Restaurants({navigation}) {
  const [lat, setLat]= useState('');
  const [lng, setLng]= useState('');

  const findCoordinates = () => {

    
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLng(position.coords.longitude) 
  
      console.log(lat, lng);
      
    });
 
  }
  
    return(
<View>


<Button onPress={()=>findCoordinates()
} title='Share Current Location' />

<Button
      title="Find a Date idea for me"
      onPress={() =>
        navigation.navigate('Dates')
      }
    />
</View>
    );
}