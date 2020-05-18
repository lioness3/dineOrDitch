import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import Dates from './components/Dates';
import Restaurants from './components/Restaurants';
import Home from './components/Home'
export default function App({navigation}) {

  const [display, setDisplay] = useState(false)
  const [text, setText] = useState('Cant decide where to eat?')
  const [restaurant, setRestaurant] = useState('')

  const Stack = createStackNavigator();
  

  const handleRestaurantSelection = () =>{
   setRestaurant('Joes')
  }
  
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'How can I help?' }}
        />
           <Stack.Screen
          name="Restaurants"
          component={Restaurants}
          options={{ title: 'Cant decide where to Eat?' }}
        />
        <Stack.Screen name="Dates" component={Dates} options={{title: 'Need Date Ideas?'}} />
      </Stack.Navigator>

      </NavigationContainer>
    
    );
 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
