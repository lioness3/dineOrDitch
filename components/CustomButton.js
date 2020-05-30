import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { useLinkProps } from '@react-navigation/native';


export default function CustomButton(props) {

    return(
    <Text style={[{color:`${props.color}`}, styles.button]}>
       {props.title}
    </Text>
    )
}
const styles = StyleSheet.create({

  button:{
  
    padding:20,
  
    fontSize:30,
    textAlign:'center',
    letterSpacing:2,
     borderColor:'white',
     borderWidth:1,
   

   
    fontWeight:'bold',
  
  },
})