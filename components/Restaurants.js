
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text,Alert, View,ActivityIndicator} from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import * as Linking from 'expo-linking';
import * as Permissions from 'expo-permissions';
import DitchButton from './DitchButton';
import DineButton from './DineButton';
import { TouchableHighlight } from 'react-native-gesture-handler';
export default function Restaurants({navigation}) {
  const [lat, setLat]= useState(null);
  const [lng, setLng]= useState(null);
  const [located, setLocated] = useState(false);
  const [restaurant, setRestaurant] = useState(null);

const [loading, setLoading] = useState(true);
const [address,setAddress] = useState('');
const [typeOfCuisine,setTypeOfCuisine] = useState('')




const openSettings = ()=>{
  Linking.openSettings()
}

  const handleLocationPermission = async ()=>{
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
  
    if (status !== "granted") {
      Alert.alert(
        "Location Unavailable",
        "Your location is needed to find a restaurant close to you",
        [
          {
            text: "Cancel",
            onPress: () => navigation.navigate('Home'),
            style: "cancel"
          },
          { text: "Open Settings", onPress: () => openSettings() }
        ],
        { cancelable: false }
      );
      
 
      
    }else if(!located){
     
      const position = await Location.getCurrentPositionAsync()
    
      let lat =  position.coords.latitude
      let lng = position.coords.longitude
      setLat(lat),
      setLng(lng),
      setLocated(true)
     
     
      
    }
}




 async function  generateRestaurant() {
   if(!lat){
     handleLocationPermission()
   }else{
    let randomNumber = Math.floor(Math.random() * 20)
    await axios.get(`https://developers.zomato.com/api/v2.1/search?`, {
       headers: {
         'Content-Type': 'application/json',
         'user-key': 'a31bd76da32396a27b6906bf0ca707a2'
       },
       params: {
         'lat':`${lat}`,
         'lon': `${lng}`,
         'radius':'8000',
         'sort': 'real_distance'
       }
     }).then(res => {
       let restaurant = res.data.restaurants[randomNumber].restaurant.name
       let address = res.data.restaurants[randomNumber].restaurant.location.address
       let typeOfCuisine = res.data.restaurants[randomNumber].restaurant.cuisines
     setRestaurant(restaurant),
       setAddress(address),
       setTypeOfCuisine(typeOfCuisine),
       setLoading(false)
      console.log(randomNumber,restaurant);
      
       

     }).catch(err => {
       console.log('error',err.message)
     })
    
  }
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
      <Text style={styles.instructions}>Thinking...</Text>
      <ActivityIndicator size='large' color='#95FCF7'/> 
    </View>
    )
  }else if(restaurant) {
  return (
    <View style={styles.container}>
      
      <View style={styles.card}>
        <Text style={styles.type}>{typeOfCuisine}</Text>
        <Text style={styles.name}>{restaurant} </Text>
        <Text style={styles.info}>{address}</Text>
      </View>
    
      <TouchableHighlight underlayColor='#13AF50'activeOpacity={.8} onPress={()=>{openMap(restaurant)}}>
        <DineButton title='Dine'/>
       </TouchableHighlight>

      <TouchableHighlight underlayColor='red'activeOpacity={.8} onPress={() => {setLoading(true), generateRestaurant()}}>
        <DitchButton/>
      </TouchableHighlight>
   
      <Text style={styles.instructions}>Press 'Dine' for directions {'\n'} or {'\n'}Press 'Ditch' for another selection. </Text>
    </View>
  )
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
   paddingHorizontal:30,
    
  },
  instructions:{
    color:'white',
   padding:30,
   textAlign:'center',
   fontWeight:'bold'
  },
  button:{
   marginTop :20,
    color:'#13AF50',
    fontSize:30,
   
},
ditchButton:{
  
    color:'red',
    fontSize:30
},
  card: {

    
    padding: 20,
    borderRadius:10,
    backgroundColor:'#354047',
    // textShadowColor:'#95FCF7',
    // textShadowRadius:60,
    shadowColor:'#BBE2FB',
    shadowRadius:3,
    shadowOpacity:0.5,

    
  },
  name:{
    marginVertical:30,
    fontSize: 30,
    color:'white',
    textAlign:'center',
    fontWeight:'bold'
  },
  info:{
    fontSize: 15,
    fontWeight:'bold'
  },
  type:{
    fontSize: 10,
    fontWeight:'bold'
  }
});