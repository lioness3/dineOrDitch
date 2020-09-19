import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import DateIdeas from './DateIdeas';
import CustomStyles from './Styles';
import { TouchableHighlight } from 'react-native-gesture-handler';
import CustomButton from './CustomButton';
import Slogan from './Slogan';
export default function Dates() {
const [date, setDate] = useState({title:'', description:''})
const [instructions, setInstructions] = useState("Sometimes it's difficult to come up with ideas." +`${'\n'}` +"I'm here to help!"+`${'\n'}` +"Press the button below for a randomly generate date idea!")
const [loading, setLoading] = useState(true)
const [dateIdeaArray, setDateIdeaArray] = useState([DateIdeas])
const [details, setDetails] = useState(false)

const generateDate = ()=>{


  let numberofDates = DateIdeas.length
    let num = Math.floor(Math.random() * numberofDates)
    let ideas = DateIdeas.splice(num, 1) 
  

    let titleIdea = ideas[0].title
    let descriptionIdea = ideas[0].description 

    
     setDate({ title: titleIdea, description: descriptionIdea})
     setLoading(false)

 

    }

    
    if(loading){
      generateDate()
    }else if(date.title){
    return(
        <View style={CustomStyles.container}>
          <Slogan categorie='Date Night'/>
          <View style={[{height:300},CustomStyles.card]}>
            <Text style={styles.title}> {date.title} </Text>
            {details ? <Text style={styles.description}>{date.description}</Text>    : null}
          </View>
          <Text style={CustomStyles.instructions}> 
          Press 'Details' to learn about {date.title} {'\n'} or {'\n'}Press 'Ditch' for another date suggestion.
          </Text>
          <TouchableHighlight underlayColor='red'activeOpacity={.8} onPress={() => {setDetails(!details)}}>
             <CustomButton title='Details' color='#58E80B' icon='check'/>
   
           </TouchableHighlight>
            <TouchableHighlight underlayColor='red' activeOpacity={.3} onPress={() =>
          generateDate()
          }>
 
               <CustomButton title='Ditch' color='red' icon='close'/>
         
          </TouchableHighlight>
        
           
        </View>
        );
}

}
const styles = StyleSheet.create({
 
 
 
    title:{
     
        color:'white',
        textDecorationLine:'underline',
        textAlign:'center',
      
        fontSize:30, 
        fontWeight:'bold' ,
       

     
       
    },
    description:{
        paddingHorizontal:10,
        color:'white',
        fontSize:10, 
        textAlign:'center',
   

  
    },
 
  });