import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { useLinkProps } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function CustomButton(props) {

    return(
    <Text style={[{backgroundColor:`${props.color}`, borderColor:`${props.color}`}, styles.button]}>
       {props.title}
       <FontAwesome name={`${props.icon}`} size={50} color="black" />
    </Text>
    )
}
const styles = StyleSheet.create({

  button:{
    padding:10,
    borderRadius:10,
    fontSize:60,
    textAlign:'center',
    letterSpacing:2,
   
    fontWeight:'bold',
    margin:1,
    color:'black'
    
  
  },
})