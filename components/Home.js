
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import Dates from './Dates';
import { createStackNavigator } from '@react-navigation/stack';



export default function Home({navigation}) {
    return(
<View>
<Button
      title="Find a Restaurant idea for me"
      onPress={() =>
        navigation.navigate('Restaurants')
      }
    />
 
<Button
      title="Find a Date idea for me"
      onPress={() =>
        navigation.navigate('Dates')
      }
    />
</View>
    );
}