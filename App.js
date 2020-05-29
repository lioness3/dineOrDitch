import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import Dates from './components/Dates';
import Restaurants from './components/Restaurants';
import Home from './components/Home';
import Cuisines from './components/Cuisines';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function App({navigation}) {





  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  

 
  
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Idea Generators' , headerStyle: { backgroundColor: 'black' }, headerTintColor:'#fff' }}
      
         
        />
           <Stack.Screen
          name="Restaurants"
          component={Restaurants}
          options={{ title: 'Restaurant Generator', headerStyle: { backgroundColor: 'black' }, headerTintColor:'#fff' }}
        />
          <Stack.Screen
          name="Cuisines"
          component={Cuisines}
          options={{ title: 'Cuisine Generator', headerStyle: { backgroundColor: 'black' }, headerTintColor:'#fff' }}
        />
        <Stack.Screen name="Dates" 
        component={Dates}
         options={{title: 'Date Generator', headerStyle: { backgroundColor: 'black' }, headerTintColor:'#fff' }} />
      </Stack.Navigator>
      
        {/* <Tab.Navigator tabBarOptions={{activeTintColor: 'tomato',
          inactiveTintColor: 'gray',   style: {
            backgroundColor: '#171F33',
            fontSize:20 
        }}} >
          <Tab.Screen name="Date" component={Dates} />
          <Tab.Screen name="Restaurants" component={Restaurants} />
          <Tab.Screen name='Cuisines' component={Cuisines} />
        </Tab.Navigator> */}
      </NavigationContainer>
    
    );
 

}

