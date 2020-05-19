import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import Dates from './components/Dates';
import Restaurants from './components/Restaurants';
import Home from './components/Home';
import Cuisines from './components/Cuisines'
export default function App({navigation}) {



  const Stack = createStackNavigator();
  

 
  
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'How can I help?' , headerStyle: { backgroundColor: 'black' }, headerTintColor:'#fff' }}
      
         
        />
           <Stack.Screen
          name="Restaurants"
          component={Restaurants}
          options={{ title: 'Restaurant Generator', headerStyle: { backgroundColor: 'black' }, headerTintColor:'#fff' }}
        />
          <Stack.Screen
          name="Cuisines"
          component={Cuisines}
          options={{ title: 'Cuisine Ideas', headerStyle: { backgroundColor: 'black' }, headerTintColor:'#fff' }}
        />
        <Stack.Screen name="Dates" 
        component={Dates}
         options={{title: 'Date Ideas', headerStyle: { backgroundColor: 'black' }, headerTintColor:'#fff' }} />
      </Stack.Navigator>

      </NavigationContainer>
    
    );
 

}

