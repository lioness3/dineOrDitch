import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import CuisineIdeas from './CuisineIdeas'


export default function Dates() {
const [cuisine, setCuisine] = useState('')
const [randomNumber, setRandomNumber] = useState(0)

const generateCuisine = ()=>{
  
   setRandomNumber(Math.floor(Math.random() * 11))
   return setCuisine(CuisineIdeas[randomNumber])
  }



return(
    <View style={styles.container}>
      <Text style={styles.head}>No Location acces? No Problem! Ill suggest a type of cuisine instead!</Text>
      <Button title = 'Generate Cuisine Idea' onPress={generateCuisine}/>
      <Text style={styles.idea}>{cuisine}</Text>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
     paddingTop:20,
     fontSize:20,
     paddingHorizontal:30,
 
    },
    head:{
        color:'white',
        paddingTop:10,
        fontSize:20, 
    },
    idea:{
        color:'#58E80B',
        paddingTop:10,
        fontSize:20, 
        fontWeight:'bold'
    }
  });