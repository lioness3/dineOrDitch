
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button,ActivityIndicator, Link } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import Dates from './Dates';
import Cuisines from './Cuisines';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import * as Permissions from 'expo-permissions';

export default function Restaurants({navigation}) {
  const [lat, setLat]= useState(null);
  const [lng, setLng]= useState(null);
  const [located, setLocated] = useState(false);
  const [restaurant, setRestaurant] = useState(null);
  const [randomNumber, setRandomNumber] = useState(0);
const [loading, setLoading] = useState(true);
const [address,setAddress] = useState('');
const [typeOfCuisine,setTypeOfCuisine] = useState('')
const [addressLink,setAddressLink]= useState('')
const [cuisine, setCuisine]= useState(null)

   const location = navigator.geolocation.getCurrentPosition((position) =>  {
      let latitude =  position.coords.latitude
     let longitude =  position.coords.longitude
    setLat(latitude),
    setLng(longitude)
     
    if(lat & lng){
      setLocated(true)  
    }
  })
   
    
  
   useEffect( ()=>{
    console.log('generating')
      generateRestaurant()
  
   }, [located])
 const generateCuisine = ()=>{
  setRandomNumber(Math.floor(Math.random() * 11))
  return setCuisine(Cuisines[randomNumber])
 }

 async function  generateRestaurant() {
  setRandomNumber(Math.floor(Math.random() * 20))
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
       setRestaurant(res.data.restaurants[randomNumber].restaurant.name),
       setAddress(res.data.restaurants[randomNumber].restaurant.location.address),
       setTypeOfCuisine(res.data.restaurants[randomNumber].restaurant.cuisines),
       setLoading(false)

     }).catch(err => {
       console.log('error',err.message)
     })
    
  }



if(loading){
  return(
    <View>
      <ActivityIndicator size='large' color='#95FCF7'/> 
      <Text>If you dont want to share your location, how about a suggestion on a type of cuisine?</Text>
      <Button title = 'Generate Cuisine Idea' onPress={generateCuisine}/>
    </View>
    )
  }else if(cuisine){
 return (
 <View>
   <Text>{cuisine}</Text>
 </View>
 )
    
  }else if(address) {
  return  (
    <View>

    <Text>{restaurant} </Text>
    <Text>{address}</Text>
    <Text>{typeOfCuisine}</Text>
    <Button title='Dine' onPress={()=>{alert('open maps')}}/>
    <Button title='Ditch' onPress={() => {setLoading(true), generateRestaurant()}}/>
    
  </View>
)
 }
}
