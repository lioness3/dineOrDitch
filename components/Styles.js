 
 import { StyleSheet} from 'react-native';
 const CustomStyles = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: 'black',
    
        paddingVertical:100,
        textAlign:'center',
        justifyContent:'flex-end',
        paddingHorizontal:30
    },
    buttonContainer:{
       flex:1,
       alignItems: 'stretch',
       justifyContent:'space-around'
    },
    card: {
        flex:1,
        padding: 20,
        borderRadius:10,
        backgroundColor:'#354047',
      
        shadowColor:'#BBE2FB',
        shadowRadius:3,
        shadowOpacity:0.5,
 
      },
    instructions:{
        flex:1,
        color:'grey',
        fontSize:20, 
        textAlign:'center',
        marginVertical:30,
    },
})
export default  CustomStyles