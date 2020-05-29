import React from 'react';
import { StyleSheet, Text} from 'react-native';


export default function DitchButton() {
    return(
    <Text style={styles.ditchButton}>
       Ditch
    </Text>
    )
}
const styles = StyleSheet.create({

  ditchButton:{
     backgroundColor:'grey',
     borderColor:'white',
     borderWidth:1,
     width:200,
    color:'red',
    fontWeight:'bold',
    fontSize:30
  },
})