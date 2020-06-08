import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import DateIdeas from './DateIdeas';
import CustomStyles from './Styles';
import { TouchableHighlight } from 'react-native-gesture-handler';
import CustomButton from './CustomButton';
import Slogan from './Slogan';
export default function Dates() {
const [date, setDate] = useState({title:'', description:''})
const [instructions, setInstructions] = useState("Sometimes it's difficult to come up with ideas." +`${'\n'}` +"I'm here to help!"+`${'\n'}` +"Press the button below for a randomly generate date idea!")
const [title, setTitle] = useState('Generate Date Idea')
const [color, setColor] = useState('blue')
const [dateIdeaArray, setDateIdeaArray] = useState([DateIdeas])

const generateDate = ()=>{
  console.log( dateIdeaArray);
  let numberofDates = DateIdeas.length
    let num = Math.floor(Math.random() * numberofDates)
    let ideas = DateIdeas[num] 
    let titleIdea = ideas.title
    let descriptionIdea = ideas.description 

    
     setDate({ title: titleIdea, description: descriptionIdea})


    }
if(date.title){
    return(
        <View style={CustomStyles.container}>
          <Slogan categorie='date night'/>
      <View style={[{height:300},CustomStyles.card]}>
            <Text style={styles.title}> {date.title} </Text>
            <Text style={styles.description}>{date.description}</Text>
            </View>
    
            <TouchableHighlight underlayColor='red' activeOpacity={.3} onPress={() =>
          generateDate()
          }>
                    <View style={{shadowColor:'yellow',
        shadowRadius:30,
        shadowOpacity:0.5,}}>
            <CustomButton title='Ditch' color='red'/>
            </View>
          </TouchableHighlight>
        
            <Text style={CustomStyles.instructions}>Press 'Ditch' for another date suggestion.</Text>
        </View>
        );
}else{
    return(
  
  
        <View style={CustomStyles.container}>
       
        <TouchableHighlight underlayColor='#AD6BEE'activeOpacity={.3} onPress={() =>
          generateDate()
          }>
            <CustomButton title='Date Idea' color='#AD6BEE' />
          </TouchableHighlight>
        <Text style={CustomStyles.instructions}> Select 'Date Idea' for a randomly generated date suggestion!</Text>
        </View>  

    )

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
        fontSize:20, 
   

  
    },
 
  });