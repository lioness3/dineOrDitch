import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { useLinkProps } from '@react-navigation/native';


export default function DineButton(props) {
    return(
    <Text style={styles.button}>
       {props.title}
    </Text>
    )
}
const styles = StyleSheet.create({

  button:{
    margin:20,
    padding:20,
    color:'#58E80B',
    fontSize:30,
    textAlign:'center',
     backgroundColor:'grey',
     borderColor:'white',
     borderWidth:1,
     width:200,
   
    fontWeight:'bold',
  
  },
})