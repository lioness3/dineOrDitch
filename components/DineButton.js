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
     backgroundColor:'grey',
     borderColor:'white',
     borderWidth:1,
     width:200,
    color:'green',
    fontWeight:'bold',
    fontSize:30
  },
})