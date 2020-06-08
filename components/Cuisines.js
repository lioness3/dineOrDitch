import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import CuisineIdeas from './CuisineIdeas'
import CustomStyles from './Styles'
import * as Linking from 'expo-linking';
import { TouchableHighlight } from 'react-native-gesture-handler';
import CustomButton from './CustomButton';
import Slogan from './Slogan'
export default function Dates() {
const [cuisine, setCuisine] = useState(null)
const [cuisineArray, setCuisineArray] = useState([CuisineIdeas])

const  generateCuisine = ()=>{
console.log(CuisineIdeas.length, cuisineArray);
let numberOfCuisineIdeas = CuisineIdeas.length
  let num =  Math.floor(Math.random() * numberOfCuisineIdeas)

   let idea = CuisineIdeas[num];

   setCuisine(idea)

  }
  const openGoogle = (cuisine)=>{
  
    Linking.openURL('https://www.google.com/search?q='+`${cuisine}`+'+recipe')
  }

if(cuisine){

  return(
    <View style={CustomStyles.container}>
   <Slogan categorie='meals'/>
     <View style={[{height:200},CustomStyles.card]}>
      <Text style={styles.idea}>{cuisine}</Text>
      </View>
      <TouchableHighlight underlayColor='red' activeOpacity={.2} onPress={() =>
          generateCuisine()
          }>
        <CustomButton title='Ditch' color='red'/>
      </TouchableHighlight>
      <TouchableHighlight underlayColor='#58E80B' activeOpacity={.8} onPress={() =>
      openGoogle(cuisine)
      }>
      <CustomButton title='Recipe' color='#58E80B'/>
      </TouchableHighlight>
      <Text style={CustomStyles.instructions}>Press 'Ditch' for another cuisine suggestion.{'\n'} or {'\n'}Press 'Recipe' for {cuisine} recipe suggestions.</Text>
    </View>
    );
}else{
  return(
    <View style={CustomStyles.container}>
<Slogan categorie='meals'/>
      <TouchableHighlight underlayColor='#6BEEEE'activeOpacity={.8} onPress={() =>
          generateCuisine()
          }>
           <CustomButton title='Cuisine' color='#6BEEEE'/>
          </TouchableHighlight>
      <Text style={CustomStyles.instructions}>Press 'Cuisine' for a randomly generated cuisine idea</Text>
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
        fontSize:50, 
        fontWeight:'bold',
      
    },
 
  });