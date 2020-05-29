
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

        <View style={styles.card}>
      
          <TouchableHighlight underlayColor='blue'activeOpacity={.8} onPress={() =>
          navigation.navigate('Restaurants')
          }>
            <Text style={styles.button}>
                Restaurant 
            </Text>
          </TouchableHighlight>
          <Text style={styles.instructions}>
             Select 'Restaurant' for a randomly generated restaurant in your area. 
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
   
          <TouchableHighlight underlayColor='blue'activeOpacity={.8} onPress={() =>
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
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    textAlign:'center',
    justifyContent:'space-evenly',
    paddingHorizontal:20,
    paddingBottom:50
  },

  button:{

   
    color:'white',
     backgroundColor:'#354047',
    textShadowColor:'#95FCF7',
    textShadowRadius:60,
    paddingHorizontal:10,
    paddingVertical:20,
    marginHorizontal:10,
    fontSize:50,
    fontWeight:'bold',
    textAlign:'center'
  },
  card:{
    width:350,
    marginVertical:10
  },
  instructions:{
    color:'grey',
    backgroundColor:'black',
    fontSize:15,
    paddingVertical:10,
    textAlign:'center',
    
  }
});