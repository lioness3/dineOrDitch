import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import { createStackNavigator } from '@react-navigation/stack';
import DateIdeas from './DateIdeas'


export default function Dates() {
const [date, setDate] = useState('')
// const [randomNumber, setRandomNumber] = (null)



const generateDate = ()=>{
    let randomNumber = Math.floor(Math.random() * 20);
    
    setDate( DateIdeas[randomNumber])
    }

return(
    <View>
        <Button title='Generate Date Idea' onPress={()=>generateDate()}/>
        <Text>{date}</Text>
    </View>
    );
}