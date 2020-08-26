
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import CustomStyles from './Styles'
import { TouchableHighlight } from 'react-native-gesture-handler';
import Slogan from './Slogan';

export default function Home({navigation}) {
    return(


      <View style={CustomStyles.container}>
        <Slogan categorie='Decisions'/>
        <View style={[{height:100,backgroundColor:'#354047'},CustomStyles.card]}>
      
          <TouchableHighlight underlayColor='#6BEE6B'activeOpacity={.8} onPress={() =>
          navigation.navigate('Restaurants')
          }>
            <Text style={[{color:'#6BEE6B'},styles.button ]}>
                Restaurant 
            </Text>
          </TouchableHighlight>
        
        </View>
        <Text style={CustomStyles.instructions}>
             Select 'Restaurant' for a randomly generated restaurant in your area. 
          </Text>
        <View style={[{height:100, backgroundColor:'#354047'},CustomStyles.card]}>
    
          <TouchableHighlight underlayColor='#6BEEEE'activeOpacity={.8} onPress={() =>
          navigation.navigate('Cuisines')
          }>
              <Text style={[{color:'#6BEEEE'},styles.button ]}>
                 Cuisine 
              </Text>
          </TouchableHighlight>
       
        </View>
        <Text style={CustomStyles.instructions}>
            Select 'Cuisine' for a randomly generated cuisine suggestion.
          </Text>
        <View style={[{height:100,backgroundColor:'#354047'},CustomStyles.card]}>
   
          <TouchableHighlight underlayColor='#AD6BEE'activeOpacity={.8} onPress={() =>
          navigation.navigate('Dates')
          }>
            <Text style={[{color:'#AD6BEE'},styles.button ]}>
             Date
            </Text>
          </TouchableHighlight>
   
        </View>
        <Text style={CustomStyles.instructions}>
          Select 'Date' for a randomly generated date suggestion.
          </Text>
      </View>
    );
}
const styles = StyleSheet.create({


  button:{

   
   
  

    textShadowColor:'black',
    textShadowRadius:10,
    padding:10,
    fontSize:40,
    fontWeight:'bold',
    textAlign:'center'
  },
 
});