import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import { createStackNavigator } from '@react-navigation/stack';
import DateIdeas from './DateIdeas'


export default function Dates() {
const [date, setDate] = useState({title:'', description:''})
const [instructions, setInstructions] = useState("Sometimes it's difficult to come up with ideas." +`${'\n'}` +"I'm here to help!"+`${'\n'}` +"Press the button below for a randomly generate date idea!")
const [title, setTitle] = useState('Generate Date Idea')
const [color, setColor] = useState('blue')


const generateDate = async()=>{
    let num = Math.floor(Math.random() * 21)
     
     let ideas = DateIdeas[num]
    
     
 let titleIdea = ideas.title
 let descriptionIdea = ideas.description 

 setInstructions("Press 'Ditch' for another cuisine suggestion.")
     setDate({ title: titleIdea, description: descriptionIdea})
     setTitle('Ditch')
     setColor('red')
    }

return(
    <View style={styles.container}>
       
        <Text style={styles.title}> {date.title} </Text>
        <Text style={styles.description}>{date.description}</Text>
        <Button title={title} onPress={()=>generateDate()} color={color}/>
        <Text style={styles.instructions}>{instructions}</Text>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: 'black',
        alignItems: 'center',
        paddingTop:20,
     
        paddingHorizontal:30
    },
    instructions:{
        color:'white',
        margin:10,
        fontSize:10, 
        textAlign:'center',
        fontWeight:'bold'
    },
    title:{
        flex:.5,
        color:'#58E80B',
        padding:10,
        fontSize:40, 
        fontWeight:'bold' ,
        textAlign:'center'
       
    },
    description:{
       
        color:'#58E80B',
        paddingHorizontal:20,
        fontSize:20, 
        fontWeight:'bold' 
    }
  });