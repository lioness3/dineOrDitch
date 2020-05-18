import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import { createStackNavigator } from '@react-navigation/stack';
import Dates from './components/Dates';
import Restaurants from './components/Restaurants';

export default function App({navigation}) {
  const [lat, setLat]= useState('');
  const [lng, setLng]= useState('');
  const [display, setDisplay] = useState(false)
  const [text, setText] = useState('Cant decide where to eat?')
  const [restaurant, setRestaurant] = useState('')

  const Stack = createStackNavigator();
  
  const  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLng(position.coords.longitude) 
      setDisplay(true)
    });
  }
  const handleRestaurantSelection = () =>{
   setRestaurant('Joes')
  }
  
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Restaurants"
          component={Restaurants}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Dates" component={Dates} />
      </Stack.Navigator>
      <View style={styles.container}>

<Button onPress={findCoordinates} title='Share Current Location' />
</View>
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
