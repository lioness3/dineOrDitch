import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput,ActivityIndicator } from 'react-native';
import CuisineIdeas from './CuisineIdeas'
import CustomStyles from './Styles'
import * as Linking from 'expo-linking';
import { TouchableHighlight } from 'react-native-gesture-handler';
import CustomButton from './CustomButton';
import Slogan from './Slogan'
import { set } from 'react-native-reanimated';

export default function Dates() {
const [cuisine, setCuisine] = useState(null)
const [loading, setLoading] = useState(true)
const [restaurants, setRestaurants] = useState(false)
const  generateCuisine = ()=>{


  let numberOfCuisineIdeas = CuisineIdeas.length
  if(numberOfCuisineIdeas <= 0){
    setRestaurants(true)
   
  }
  let num =  Math.floor(Math.random() * numberOfCuisineIdeas)
  let idea = CuisineIdeas.splice(num, 1)

  setCuisine(idea)
  setLoading(false)
  console.log(cuisine);
  
  }
  const openGoogle = (cuisine)=>{
  
    Linking.openURL('https://www.google.com/search?q='+`${cuisine}`+'+recipe')
  }

  if(loading){
    generateCuisine()
    return(
      <View style={CustomStyles.container}>
        
        <ActivityIndicator size='large' color='#95FCF7'/> 
        <Text style={styles.loading}>Thinking...</Text>
      </View>
      )
    }else if(cuisine){


    return(
    <View style={CustomStyles.container}>
   <Slogan categorie='Meals'/>
     <View style={[{height:200, backgroundColor:'#354047'},CustomStyles.card]}>
      <Text style={styles.idea}>{cuisine}</Text>
      </View>
      <TouchableHighlight underlayColor='#58E80B' activeOpacity={.8} onPress={() =>
      openGoogle(cuisine)
      }>
      <CustomButton title='Recipe' color='#58E80B' icon='list-alt'/>
      </TouchableHighlight>
      <TouchableHighlight underlayColor='red' activeOpacity={.2} onPress={() =>
          generateCuisine()
          }>
        <CustomButton title='Ditch' color='red' icon='close'/>
      </TouchableHighlight>
 
      <Text style={CustomStyles.instructions}>Press 'Ditch' for another cuisine suggestion.{'\n'} or {'\n'}Press 'Recipe' for {cuisine} recipe suggestions.</Text>
    </View>
    );
}else if(restaurants){
  return(
    <View style={CustomStyles.container}>
<Slogan categorie='meals'/>
      <TouchableHighlight underlayColor='#6BEEEE'activeOpacity={.8} onPress={() =>
          navigator.navigate('Restaurants')
          }>
            <Text>MAYBE YOU SHOULD GO OUT TO EAT</Text>
           <CustomButton title='Restaurant' color='#6BEEEE'/>
          </TouchableHighlight>
      <Text style={CustomStyles.instructions}>Press 'Restaurant' for a randomly generated Restaurant in your area</Text>
    </View>
    );
}




}
const styles = StyleSheet.create({

    idea:{
        textAlign:'center',
        color:'white',
  paddingVertical:40,
        textShadowColor:'#0E9EF9',
        textShadowRadius:100,
        fontSize:30, 
        fontWeight:'bold',
      
    },
 
  });