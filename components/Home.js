
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import CustomStyles from './Styles'
import { TouchableHighlight } from 'react-native-gesture-handler';
import Slogan from './Slogan';

export default function Home({navigation}) {
    return(


      <View style={CustomStyles.container}>
        <Slogan description='decisions'/>
        <View style={[{height:100},CustomStyles.card]}>
      
          <TouchableHighlight underlayColor='#0E9EF9'activeOpacity={.8} onPress={() =>
          navigation.navigate('Restaurants')
          }>
            <Text style={styles.button}>
                Restaurant 
            </Text>
          </TouchableHighlight>
        
        </View>
        <Text style={CustomStyles.instructions}>
             Select 'Restaurant' for a randomly generated restaurant in your area. 
          </Text>
        <View style={[{height:100},CustomStyles.card]}>
    
          <TouchableHighlight underlayColor='#0E9EF9'activeOpacity={.8} onPress={() =>
          navigation.navigate('Cuisines')
          }>
              <Text style={styles.button }>
                 Cuisine 
              </Text>
          </TouchableHighlight>
       
        </View>
        <Text style={CustomStyles.instructions}>
            Select 'Cuisine' for a randomly generated cuisine suggestion.
          </Text>
        <View style={[{height:100},CustomStyles.card]}>
   
          <TouchableHighlight underlayColor='#0E9EF9'activeOpacity={.8} onPress={() =>
          navigation.navigate('Dates')
          }>
            <Text style={styles.button }>
             Activity
            </Text>
          </TouchableHighlight>
   
        </View>
        <Text style={CustomStyles.instructions}>
          Select 'Activity' for a randomly generated date suggestion.
          </Text>
      </View>
    );
}
const styles = StyleSheet.create({


  button:{

   
    color:'white',
     backgroundColor:'#354047',
    textShadowColor:'#95FCF7',
    textShadowRadius:50,

    fontSize:50,
    fontWeight:'bold',
    textAlign:'center'
  },
 
});