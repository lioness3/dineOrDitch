import React from 'react';
import { StyleSheet, Text, View} from 'react-native';



export default function Logo() {

    return(
    <Text style={styles.logo}>
       Dine or Ditch 
    </Text>
    )
}
const styles = StyleSheet.create({

  logo:{
  
    padding:20,
  
    fontSize:30,
    textAlign:'center',
  
 
   
color:'#97CFF2',
   
    fontWeight:'bold',
  
  },
})