import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import CuisineIdeas from './CuisineIdeas'
import axios from 'axios';
import * as Linking from 'expo-linking';
import { TouchableHighlight } from 'react-native-gesture-handler';
import CustomButton from './CustomButton';
export default function Dates() {
const [cuisine, setCuisine] = useState(null)

const  generateCuisine = ()=>{

  let num =  Math.floor(Math.random() * 10)

   let idea = CuisineIdeas[num];

   setCuisine(idea)

  }
  const openGoogle = (cuisine)=>{
  
    Linking.openURL('https://www.google.com/search?q='+`${cuisine}`+'+recipe')
  }

if(cuisine){

  return(
    <View style={styles.container}>
     
      <Text style={styles.idea}>{cuisine}</Text>
      <TouchableHighlight underlayColor='red' activeOpacity={.8} onPress={() =>
          generateCuisine()
          }>
        <CustomButton title='Ditch' color='red'/>
      </TouchableHighlight>
      <TouchableHighlight underlayColor='#58E80B' activeOpacity={.8} onPress={() =>
      openGoogle(cuisine)
      }>
      <CustomButton title='Recipe' color='#58E80B'/>
      </TouchableHighlight>
      <Text style={styles.instructions}>Press 'Ditch' for another cuisine suggestion.{'\n'} or {'\n'}Press 'Recipe' for {cuisine} recipe suggestions.</Text>
    </View>
    );
}else{
  return(
    <View style={styles.container}>
      <Text style={styles.idea}>{cuisine}</Text>
      <TouchableHighlight underlayColor='blue'activeOpacity={.8} onPress={() =>
          generateCuisine()
          }>
              <Text style={styles.button }>
                 Cuisine 
              </Text>
          </TouchableHighlight>
      <Text style={styles.instructions}>Press 'Cuisine' for a randomly generated cuisine idea</Text>
    </View>
    );
}




}
const styles = StyleSheet.create({
    container: {
      flex: 3,
      backgroundColor: 'black',
      alignItems: 'center',
     paddingVertical:100,
     textAlign:'center',
     paddingHorizontal:30,
 
    },
    button:{
       
      color:'#0E9EF9',
      fontSize:30,
     
  },
  ditchButton:{
     
      color:'red',
      fontSize:30
  },
  recipieButton:{
     
    color:'green',
    fontSize:30
},
    instructions:{

        color:'white',
        margin:30,
        fontSize:15, 
        textAlign:'center',
        fontWeight:'bold'
    },
    idea:{
        flex:2,
        color:'#58E80B',
       marginTop:200,
        fontSize:50, 
        fontWeight:'bold',
      
    },
 
  });