
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import Dates from './Dates';
import { createStackNavigator } from '@react-navigation/stack';



export default function Restaurants({navigation}) {
    return(
<View>
<Button
      title="Find a Date idea for me"
      onPress={() =>
        navigation.navigate('Dates')
      }
    />
</View>
    );
}