import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import CuisineIdeas from './CuisineIdeas'
import axios from 'axios';
import * as Linking from 'expo-linking';
export default function Dates() {
const [cuisine, setCuisine] = useState(null)
const [instructions, setInstructions] = useState("Select 'Cuisine' to generate a type of food to try.")
const [title, setTitle] = useState('Cuisine')
const [color, setColor] = useState('blue')
const  generateCuisine = async()=>{

  let num =  Math.floor(Math.random() * 10)

   let idea = CuisineIdeas[num];
   console.log(idea, num);
   setCuisine(idea)
setInstructions("Press 'Ditch' for another cuisine suggestion.")
   setTitle('Ditch')
   setColor('red')
  }



  return(
    <View style={styles.container}>
      <Text style={styles.idea}>{cuisine}</Text>
      <Button title = {title} onPress={()=>{generateCuisine()}} color={color}/>
      <Text style={styles.instructions}>{instructions}</Text>
    </View>
    );


}
const styles = StyleSheet.create({
    container: {
      flex: 3,
      backgroundColor: 'black',
      alignItems: 'center',
     paddingVertical:100,

     paddingHorizontal:30,
 
    },
    instructions:{

        color:'white',
        margin:10,
        fontSize:10, 
        textAlign:'center',
        fontWeight:'bold'
    },
    idea:{
        flex:2,
        color:'#58E80B',
       
        fontSize:50, 
        fontWeight:'bold',
      
    },
 
  });