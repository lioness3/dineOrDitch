
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import Dates from './Dates';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import * as Permissions from 'expo-permissions';

export default function Restaurants({navigation}) {
  const [lat, setLat]= useState(null);
  const [lng, setLng]= useState(null);
  const [located, setLocated] = useState(false);
  const [restaurant, setRestaurant] = useState('')


async function  generateRestaurant() {
 navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude),
    setLng(position.coords.longitude),
    console.log(lat); 
  })
  
   
    let randomNumber = Math.floor(Math.random() * 20);
   await axios.get(`https://developers.zomato.com/api/v2.1/search?`, {
      headers: {
        'Content-Type': 'application/json',
        'user-key': 'a31bd76da32396a27b6906bf0ca707a2'
      },
      params: {
        'lat':`${lat}`,
        'lon': `${lng}`,

        // 'lat': '45.5047512',
        // 'lon': '-122.8462298',
        'radius':'600',
        'sort': 'real_distance'
      }
    }).then(res => {
      console.log(res)
      
      setRestaurant(res.data.restaurants[randomNumber].restaurant.name)
    }).catch(err => {
    
        return setRestaurant('Please share your location so we can better assist you')
       
      
    })
}



  {
  return(
    <View>
      <Text>Ive suggested {restaurant} for you! </Text>
      <Button title='suggest another' onPress={() => generateRestaurant()}/>
    </View>
    )}
}