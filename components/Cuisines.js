import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput,ActivityIndicator } from 'react-native';
import CuisineIdeas from './CuisineIdeas'
import CustomStyles from './Styles'
import * as Linking from 'expo-linking';
import { TouchableHighlight } from 'react-native-gesture-handler';
import CustomButton from './CustomButton';
import Slogan from './Slogan'
import { set } from 'react-native-reanimated';

export default function Cuisines({navigation}) {
const [cuisine, setCuisine] = useState(null)
const [loading, setLoading] = useState(true)
const [restaurants, setRestaurants] = useState(false)
const  generateCuisine = ()=>{


  let numberOfCuisineIdeas = CuisineIdeas.length
 
  
 
    let num =  Math.floor(Math.random() * numberOfCuisineIdeas)
    let idea = CuisineIdeas.splice(num, 1)
  if(idea.length > 0){
    setCuisine(idea) 
    setLoading(false)
  }else{
   setRestaurants(true)
  }
 

 
  

  
  }
  const openGoogle = (cuisine)=>{
  
    Linking.openURL('https://www.google.com/search?q='+`${cuisine}`+'+recipe')
  }

  if(loading){
    generateCuisine()
    return(
      <View style={CustomStyles.container}>
        
        <ActivityIndicator size='large' color='#95FCF7'/> 
        <Text style={styles.loading}>Thinking...</Text>
      </View>
      )
    }else if(restaurants === false){


    return(
    <View style={CustomStyles.container}>
   <Slogan categorie='Meals'/>
     <View style={[{height:200, backgroundColor:'#354047'},CustomStyles.card]}>
      <Text style={styles.idea}>{cuisine}</Text>
      </View>
      <Text style={CustomStyles.instructions}>
        Press 'Recipe' for {cuisine} recipe suggestions.{'\n'} or {'\n'}Press 'Ditch' for another cuisine suggestion.
      </Text>
      <TouchableHighlight underlayColor='#58E80B' activeOpacity={.8} onPress={() =>
      openGoogle(cuisine)
      }>
        <CustomButton title='Recipe' color='#58E80B' icon='list-alt'/>
      </TouchableHighlight>
      <TouchableHighlight underlayColor='red' activeOpacity={.2} onPress={() =>
          generateCuisine()
          }>
        <CustomButton title='Ditch' color='red' icon='close'/>
      </TouchableHighlight>
 
    
    </View>
    );
}else{
  return(
    <View style={CustomStyles.container}>
<Slogan categorie='meals'/>
<Text style={styles.idea}>MAYBE YOU SHOULD GO OUT TO EAT</Text>
            <Text style={CustomStyles.instructions}>
            Press 'Restaurant' for a randomly generated restaurant in your area
            </Text>
      <TouchableHighlight underlayColor='#6BEEEE'activeOpacity={.8} onPress={() =>
          {navigation.navigate('Restaurants')}
          }>
        
           <CustomButton title='Restaurant' color='#6BEEEE' icon='cutlery '/>
          </TouchableHighlight>

    </View>
    );
}




}
const styles = StyleSheet.create({

    idea:{
        textAlign:'center',
        color:'white',
  paddingVertical:40,
        textShadowColor:'#0E9EF9',
        textShadowRadius:100,
        fontSize:30, 
        fontWeight:'bold',
      
    },
 
  });