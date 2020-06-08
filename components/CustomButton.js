import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { useLinkProps } from '@react-navigation/native';


export default function CustomButton(props) {

    return(
    <Text style={[{color:`${props.color}`, borderColor:`${props.color}`,}, styles.button]}>
       {props.title}
    </Text>
    )
}
const styles = StyleSheet.create({

  button:{
    padding:10,
    fontSize:40,
    textAlign:'center',
    letterSpacing:2,
     borderWidth:.25,
    fontWeight:'bold',
    margin:1,
  
  },
})