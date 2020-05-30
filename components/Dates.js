import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import DateIdeas from './DateIdeas';
import CustomStyles from './Styles';
import { TouchableHighlight } from 'react-native-gesture-handler';
import CustomButton from './CustomButton';

export default function Dates() {
const [date, setDate] = useState({title:'', description:''})
const [instructions, setInstructions] = useState("Sometimes it's difficult to come up with ideas." +`${'\n'}` +"I'm here to help!"+`${'\n'}` +"Press the button below for a randomly generate date idea!")
const [title, setTitle] = useState('Generate Date Idea')
const [color, setColor] = useState('blue')


const generateDate = ()=>{
    let num = Math.floor(Math.random() * 21)
    let ideas = DateIdeas[num] 
    let titleIdea = ideas.title
    let descriptionIdea = ideas.description 

    
     setDate({ title: titleIdea, description: descriptionIdea})


    }
if(date.title){
    return(
        <View style={CustomStyles.container}>
      <View style={CustomStyles.card}>
            <Text style={styles.title}> {date.title} </Text>
            <Text style={styles.description}>{date.description}</Text>
            </View>
            <TouchableHighlight underlayColor='red' activeOpacity={.8} onPress={() =>
          generateDate()
          }>
            <CustomButton title='Ditch' color='red'/>
          </TouchableHighlight>
            <Text style={CustomStyles.instructions}>Press 'Ditch' for another date suggestion.</Text>
        </View>
        );
}else{
    return(
  
  
        <View style={CustomStyles.container}>
       
        <TouchableHighlight underlayColor='blue'activeOpacity={.8} onPress={() =>
          generateDate()
          }>
            <CustomButton title='Date Idea' color='blue' />
          </TouchableHighlight>
        <Text style={CustomStyles.instructions}> Select 'Date Idea' for a randomly generated date suggestion!</Text>
        </View>  

    )

}

}
const styles = StyleSheet.create({
 
    header:{
        color:'white',
      
        fontSize:20, 
        textAlign:'center',
        fontWeight:'bold' ,
  
    },
 
    title:{
     
        color:'white',
        padding:10,
        fontSize:30, 
        fontWeight:'bold' ,
       

     
       
    },
    description:{

        color:'white',
        fontSize:20, 
   

  
    },
 
  });