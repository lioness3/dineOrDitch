
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
import { Logs } from 'expo';

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
       setLoading(false),
       console.log(res.data.restaurants[randomNumber].restaurant.location);
       

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
      <Text style={styles.instructions}>Thinking of a suggestion for you...</Text>
      <ActivityIndicator size='large' color='#95FCF7'/> 
    </View>
    )
  }else if(restaurant) {
  return  (
    <View style={styles.container}>
     
<View style={styles.card}>
<Text style={styles.name}>{restaurant} </Text>
<Text style={styles.type}>{typeOfCuisine}</Text>
  
    <Text style={styles.info}>{address}</Text>

    </View>
    <View style={styles.buttons}>
    <Button color='green' title='Dine' onPress={()=>{openMap(restaurant)}}/>
    <Button color='red' title='Ditch' onPress={() => {setLoading(true), generateRestaurant()}}/>
    </View>
    <Text style={styles.instructions}>Press 'Dine' for directions or 'Ditch' for another selection. </Text>
  </View>
)
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  instructions:{
    color:'white',
  },
  buttons: {
   
    flexDirection:'row',
    margin:30,
    padding:30,
    justifyContent:'space-around'
   
   
  },
  card: {
  
    backgroundColor: 'white',
    padding: 20,
    borderRadius:10,
  },
  name:{
    fontSize: 40
  },
  info:{
    fontSize: 20
  },
  type:{
    fontSize: 10,
   
  }
});