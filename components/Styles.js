 
 import { StyleSheet} from 'react-native';
 const CustomStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'stretch',
        paddingBottom:100,
        textAlign:'center',
        justifyContent:'flex-end',
        paddingHorizontal:30
    },
    buttonContainer:{
       flex:.3,
       justifyContent:'space-around'
    },
    card: {
        flex:0.5,
        padding: 20,
        borderRadius:10,
        backgroundColor:'#354047',
        // textShadowColor:'#95FCF7',
        // textShadowRadius:60,
        shadowColor:'#BBE2FB',
        shadowRadius:3,
        shadowOpacity:0.5,
        marginBottom:50
      },
    instructions:{

        color:'grey',
        fontSize:20, 
        textAlign:'center',
        marginVertical:30,
    },
})
export default  CustomStyles