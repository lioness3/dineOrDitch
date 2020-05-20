
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import Dates from './Dates';
import Restaurants from './Restaurants';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Home({navigation}) {
    return(


      <View style={styles.container}>
        <Text style={styles.header}>I have some ideas in store for you...</Text>
        <View style={styles.card}>
          <Text style={styles.instructions}>
            Click below for a randomly generated restaurant in your area. {'\n'} *note: this action requires you to share your location
          </Text>
          <TouchableHighlight underlayColor='blue'activeOpacity={.5} onPress={() =>
          navigation.navigate('Restaurants')
          }>
            <Text style={styles.button}>
               Find a Restaurant Suggestion
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.card}>
          <Text style={styles.instructions}>
            Click below for a randomly generated cuisine suggestion.
          </Text>
          <TouchableHighlight underlayColor='green'activeOpacity={.5} onPress={() =>
          navigation.navigate('Cuisines')
          }>
              <Text style={styles.button }>
                Find a Cuisine Suggestion
              </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.card}>
          <Text style={styles.instructions}>
          Click below for a randomly generated date suggestion.
          </Text>
          <TouchableHighlight  underlayColor='yellow'activeOpacity={.5} onPress={() =>
          navigation.navigate('Dates')
          }>
            <Text style={styles.button }>
              Find a Date Idea
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: 'black',
    alignItems: 'center',

    
  },
  header:{
    flex:.5,
    color:'white',
    padding:10
  },
  button:{
   
    color:'white',
     backgroundColor:'black',
     borderRadius:10,
    padding:10,
    fontSize:20,
    fontWeight:'bolder',
    textAlign:'center'
  },
  card:{
    flex:1.5,
    backgroundColor:'white',
    width:350,
    borderColor:'green',
    borderWidth:5,
    paddingHorizontal:3,
    paddingVertical:30,
    borderRadius:5,
    marginVertical:10
  },
  instructions:{
    flex:1,
    color:'black',
    fontSize:10,
    fontWeight:'bold',
    padding:5,
    textAlign:'center'
  }
});