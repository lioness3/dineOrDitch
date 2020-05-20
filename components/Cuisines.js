import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import CuisineIdeas from './CuisineIdeas'


export default function Dates() {
const [cuisine, setCuisine] = useState(null)
const [instructions, setInstructions] = useState('Dont want to share your location?' + `${'\n'}` + 'No problem!'+ `${'\n'}` + 'let/s suggest a type of cuisine instead!')
const [title, setTitle] = useState('Generate Cuisine Idea')
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
      <Text style={styles.head}>{instructions}</Text>
    </View>
    );


}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
     paddingTop:20,

     paddingHorizontal:30,
 
    },
    head:{
        color:'white',
        margin:10,
        fontSize:10, 
        textAlign:'center',
        fontWeight:'bold'
    },
    idea:{
      flex:.8,
        color:'#58E80B',
       
        fontSize:50, 
        fontWeight:'bold',
      
    },
 
  });