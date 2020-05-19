
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button,ActivityIndicator, Link } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import Dates from './Dates';
import Cuisines from './Cuisines';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import * as Linking from 'expo-linking';
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

 navigator.geolocation.getCurrentPosition((position) =>  {
      let latitude =  position.coords.latitude
     let longitude =  position.coords.longitude
    setLat(latitude),
    setLng(longitude)
     
    if(lng){
      setLocated(true)  
    }
  })
   
    
  

 const generateCuisine = ()=>{
   setLoading(false)
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
         'radius':'8000',
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
  useEffect( ()=>{

    generateRestaurant()

 }, [located])

const openMap = (restaurant)=>{
  
  Linking.openURL('https://www.google.com/maps/search/?api=1&query='+`${restaurant}`)
}
if(loading){
  return(
    <View style={styles.container}>
      <Text>Thinking of a suggestion for you...</Text>
      <ActivityIndicator size='large' color='#95FCF7'/> 
      
      <Text>If you dont want to share your location, how about a suggestion on a type of cuisine?</Text>
      <Button title = 'Generate Cuisine Idea' onPress={generateCuisine}/>
    </View>
    )
  }else if(cuisine){
 return (
 <View style={styles.container}>
   <Text>{cuisine}</Text>
 </View>
 )
    
  }else if(restaurant) {
  return  (
    <View style={styles.container}>
<View >
    <Text>{restaurant} </Text>
    <Text>{address}</Text>
    <Text>{typeOfCuisine}</Text>
    </View>
    <View style={styles.buttons}>
    <Button title='Dine' onPress={()=>{openMap(restaurant)}}/>
    <Button title='Ditch' onPress={() => {setLoading(true), generateRestaurant()}}/>
    </View>
  </View>
)
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    width: 100,
    justifyContent: 'center',
   
  }
});