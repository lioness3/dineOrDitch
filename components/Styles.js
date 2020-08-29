 
 import { StyleSheet} from 'react-native';
 const CustomStyles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: 'black',

        justifyContent:'space-evenly',
        alignContent:'flex-end',
        paddingBottom:20,
        paddingHorizontal:30

    },

    card: {
       
        padding: 20,
        borderRadius:10,
        borderWidth:2,
        borderColor:'#97CFF2',
        justifyContent:'space-between'

 
      },
    instructions:{
     
        color:'grey',
        fontSize:20, 
        textAlign:'center',
      

    },
})
export default  CustomStyles