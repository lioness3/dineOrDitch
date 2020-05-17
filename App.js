import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import * as Location from 'expo-location';

export default function App() {
  const [lat, setLat]= useState('');
  const [lng, setLng]= useState('');
  
  const  findCoordinates = () => {
    console.log('here');
    navigator.geolocation.getCurrentPosition((position) => {
    
     
      
      setLat(position.coords.latitude)
      setLng(position.coords.longitude)

    
      
    });
     



    }
  return (
    <View style={styles.container}>
      <Text>Cant decide where to eat? {lat}</Text>
    
      <Button onPress={findCoordinates} title='Share Current Location' />
      <Button title='Enter a city'/>
    </View>
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
