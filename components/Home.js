
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
        
          <TouchableHighlight underlayColor='blue'activeOpacity={.8} onPress={() =>
          navigation.navigate('Restaurants')
          }>
            <Text style={styles.button}>
                Restaurant 
            </Text>
          </TouchableHighlight>
          <Text style={styles.instructions}>
            Hungry now but don't know what to eat? Select 'Restaurant' for a randomly generated restaurant in your area. {'\n'} *note: this action requires you to share your location
          </Text>
        </View>
        <View style={styles.card}>
         
          <TouchableHighlight underlayColor='blue'activeOpacity={.8} onPress={() =>
          navigation.navigate('Cuisines')
          }>
              <Text style={styles.button }>
                 Cuisine 
              </Text>
          </TouchableHighlight>
          <Text style={styles.instructions}>
            Select 'Cuisine' for a randomly generated cuisine suggestion.
          </Text>
        </View>
       
        <View style={styles.card}>
          
          <TouchableHighlight  underlayColor='blue'activeOpacity={.8} onPress={() =>
          navigation.navigate('Dates')
          }>
            <Text style={styles.button }>
             Activity
            </Text>
          </TouchableHighlight>
          <Text style={styles.instructions}>
          Select 'Activity' for a randomly generated date suggestion.
          </Text>
        </View>
       
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: 'black',
    alignItems: 'center',
    textAlign:'center',
    
  },
  header:{
   
    color:'white',
    padding:10
  },
  button:{
  
    borderColor:'black',
    borderWidth:5,
    color:'white',
     backgroundColor:'#404146',
     borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:100,
    fontSize:50,
    fontWeight:'bold',
    textAlign:'center'
  },
  card:{
    flex:1.5,
  
    width:350,


    paddingBottom:30,
    shadowColor:'#BBE2FB',
  shadowOpacity:0.5,
    shadowRadius:30,
    borderRadius:5,
    marginVertical:10
  },
  instructions:{
    flex:0.3,
    color:'white',
    backgroundColor:'black',
    fontSize:10,
    fontWeight:'bold',
    padding:5,
    textAlign:'center'
  }
});