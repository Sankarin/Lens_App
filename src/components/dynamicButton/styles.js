import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
    container: {
       flexDirection:'row', 
         borderColor:'grey', 
         borderWidth:1,
         padding:5,
         margin:5,
         width:150,
         height:35,
         justifyContent:'center',
        },
    containerText:{
      alignSelf:'center',
      fontSize:14,
      color:'#000'
    },
    containerSelect: {
      flexDirection:'row', 
        borderColor:'green', 
        backgroundColor:'grey',
        borderWidth:1,
        padding:5,
        margin:5,
        width:150,
        height:35,
        justifyContent:'center',
       },
  
  });
    export default styles;