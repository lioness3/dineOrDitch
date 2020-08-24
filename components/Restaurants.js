
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text,Alert, View,ActivityIndicator} from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import * as Linking from 'expo-linking';
import * as Permissions from 'expo-permissions';
import CustomStyles from './Styles';
import CustomButton from './CustomButton';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Slogan from './Slogan'
export default function Restaurants({navigation}) {
  const [lat, setLat]= useState(null);
  const [lng, setLng]= useState(null);
  const [located, setLocated] = useState(false);
  const [data, setData] = useState([])
  const [restaurant, setRestaurant] = useState('');
 const [randomNumber, setRandomNumber] = useState(null)
  const [randomNumberArray, setRandomNumberArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState('');
  const [typeOfCuisine, setTypeOfCuisine] = useState('');




const openSettings = () => {
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
      console.log('locating');
      const position = await Location.getCurrentPositionAsync()
    console.log('located');
    
      let lat =  position.coords.latitude
      let lng = position.coords.longitude
      setLat(lat),
      setLng(lng),
    
      setLocated(true)
     

    }
}

 const handleRandomNumber = () =>{
 let newNumber = Math.floor(Math.random() * 20)



 
  // let compareUniqueNumber = randomNumberArray.includes(randomNumber)
  let compareUniqueNumber = randomNumberArray.includes(newNumber)
  if( compareUniqueNumber === false )  {
   
    setRandomNumber(newNumber)

    console.log('number hasnt been used yet','randomNumber:', randomNumber, 'newNumber:',newNumber);
    setRandomNumberArray(randomNumberArray => [...randomNumberArray, newNumber])

   
  }else if( compareUniqueNumber === true ){
    console.log('numb ers been used')
  
  }

}


 async function  generateRestaurant() {
  //MAYBE CHANGE TO IF NOT LOCATED
   if(!lat){
     handleLocationPermission()
   }
    //  STORE RANDOM NUMBER IN AN ARRAY AND CHECK TO SEE IF YOUVE USED IT BEFORE
    

   
//  IF THE RANDOM NUMBER HAS NOT YET BEEN ADDED TO THE Array, ADDIT, ELSE, REGENERATE



 
    
   if (randomNumber){
  
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
      console.log(randomNumber,'from  api call')
       let restaurant = res.data.restaurants[randomNumber].restaurant.name
      
       let newData = res.data.restaurants
       let address = res.data.restaurants[randomNumber].restaurant.location.locality
       let typeOfCuisine = res.data.restaurants[randomNumber].restaurant.cuisines
     setRestaurant(restaurant),
      setAddress(address),
       setData(newData),
       setTypeOfCuisine(typeOfCuisine),
       setLoading(false),
      //  setRandomNumber(null)
    
          
       console.log( newData, 'random number:', randomNumber, 'random number array:', randomNumberArray, 'restaurant:', restaurant);
       

     }).catch(err => {
       console.log('error',err.message)
     })
   }else if(!randomNumber){
     console.log('no random number:', randomNumber)
  
   }
   
   
  
    
  }

  
  useEffect( ()=>{

    generateRestaurant()
  
 }, [located])
 useEffect( ()=>{

  handleRandomNumber()

}, [loading])

const openMap = (restaurant)=>{
  
  Linking.openURL('https://www.google.com/maps/search/?api=1&query='+`${restaurant}`)
}

if(loading){
  return(
    <View style={CustomStyles.container}>
      
      <ActivityIndicator size='large' color='#95FCF7'/> 
      <Text style={styles.loading}>Thinking...</Text>
    </View>
    )
  }else if(restaurant) {
  return (
    <View style={CustomStyles.container}>
      <Slogan categorie='Restaurant Choices' />
      <View style={CustomStyles.card}>
        <Text style={styles.name}>{restaurant} </Text>
        <Text style={styles.type}>{typeOfCuisine}</Text>
        <Text style={styles.info}>{address}</Text>
        
        
      </View>

      <TouchableHighlight underlayColor='#13AF50'activeOpacity={.8} onPress={()=>{openMap(restaurant)}}>
        <CustomButton title='Dine' color='#58E80B'/>
       </TouchableHighlight>

      <TouchableHighlight underlayColor='red'activeOpacity={.8} onPress={() => {setLoading(true),  setRandomNumber(null) ,generateRestaurant()}}>
      <CustomButton title='Ditch' color='red'/>
      </TouchableHighlight>
  
      <Text style={CustomStyles.instructions}>Press 'Dine' for directions {'\n'} or {'\n'}Press 'Ditch' for another selection. </Text>
    </View>
  )
 }
}
const styles = StyleSheet.create({
  loading:{
    marginVertical:100,
    textAlign:'center',
    color:'white',
    fontSize: 30,
    fontWeight:'bold'
  },
  name:{
    marginVertical:30,
    fontSize: 50,
    color:'white',
    textShadowColor:'#6BEE6B',
    textShadowRadius:30,

    textAlign:'center',
    fontWeight:'bold'
  },
  info:{
    color:'white',
    fontSize: 15,
 
  },
  type:{
    color:'white',
    fontSize: 20,
 
  }
});