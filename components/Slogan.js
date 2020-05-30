
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import CustomStyles from './Styles'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Slogan(props) {
    return(
<Text style={CustomStyles.instructions}>Dine or Ditch making {props.categorie} plans easier</Text>


    )
}