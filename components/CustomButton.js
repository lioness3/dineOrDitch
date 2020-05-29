import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { useLinkProps } from '@react-navigation/native';


export default function CustomButton(props) {

    return(
    <Text style={[{color:`${props.color}`, backgroundColor: props.backgroundColor ? `${props.color}` : 'black' }, styles.button]}>
       {props.title}
    </Text>
    )
}
const styles = StyleSheet.create({

  button:{
   
    padding:10,
    fontSize:30,
    textAlign:'center',
    
     borderColor:'white',
     borderWidth:1,
     width:200,
   
    fontWeight:'bold',
  
  },
})