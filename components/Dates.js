import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import { createStackNavigator } from '@react-navigation/stack';
import DateIdeas from './DateIdeas'


export default function Dates() {
const [date, setDate] = useState({title:'', description:''})
const [randomNumber, setRandomNumber] = useState(0)
const [title, setTitle] = useState('Generate Date Idea')
const [color, setColor] = useState('blue')


const generateDate = ()=>{
     setRandomNumber(Math.floor(Math.random() * 22)) 
     setTitle('Ditch')
     setColor('red')
     setDate({ title: DateIdeas[randomNumber].title, description:DateIdeas[randomNumber].description})
    }

return(
    <View style={styles.container}>
        <Button title={title} onPress={()=>generateDate()} color={color}/>
        <Text style={styles.title}> {date.title} </Text>
        <Text style={styles.description}>{date.description}</Text>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        paddingTop:20,
     
        paddingHorizontal:30
    },
    title:{
        color:'#58E80B',
        padding:10,
        fontSize:20, 
        fontWeight:'bold' 
       
    },
    description:{
        color:'#58E80B',
        paddingHorizontal:20,
        fontSize:20, 
        fontWeight:'bold' 
    }
  });