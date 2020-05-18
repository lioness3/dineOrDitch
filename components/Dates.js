import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import { createStackNavigator } from '@react-navigation/stack';
import DateIdeas from './DateIdeas'


export default function Dates() {
const [date, setDate] = useState({title:'', description:''})
const [randomNumber, setRandomNumber] = useState(0)



const generateDate = ()=>{
     setRandomNumber(Math.floor(Math.random() * 22)) 
   
   return  setDate({ title: DateIdeas[randomNumber].title, description:DateIdeas[randomNumber].description})
    }

return(
    <View>
        <Button title='Generate Date Idea' onPress={()=>generateDate()}/>
        <Text> {date.title} </Text>
        <Text>{date.description}</Text>
    </View>
    );
}