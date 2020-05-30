 
 import { StyleSheet} from 'react-native';
 const CustomStyles = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: 'black',
        textAlign:'center',
        justifyContent:'space-evenly',
        paddingVertical:100,
        paddingHorizontal:30

    },

    card: {

        padding: 20,
        borderRadius:10,
        borderWidth:2,
        borderColor:'white',
        backgroundColor:'#354047',
      
        shadowColor:'#BBE2FB',
        shadowRadius:10,
        shadowOpacity:0.5,
 
      },
    instructions:{
      
        color:'grey',
        fontSize:20, 
        textAlign:'center',
      

    },
})
export default  CustomStyles