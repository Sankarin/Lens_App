import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
    container: {
       flexDirection:'row', 
        alignSelf: 'flex-start', 
         margin:5, 
         padding:5, 
        },
    containerImage: {
      width:25, 
      height:25,
      
    },
    subContainer: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',

       },
    containerText:{
      alignSelf:'center',
      fontSize:14,
      paddingLeft:10,
    },
  
  });
    export default styles;