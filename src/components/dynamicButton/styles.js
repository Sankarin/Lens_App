import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
    container: {
       flexDirection:'row', 
         borderColor:'gainsboro', 
         borderWidth:1,
         padding:5,
         margin:5,
         width:150,
         height:35,
         justifyContent:'center',
        },
        containerSelect: {
          flexDirection:'row', 
            borderColor:'dimgray', 
            borderWidth:1,
            padding:5,
            margin:5,
            width:150,
            height:35,
            justifyContent:'center',
            backgroundColor:'gainsboro',
           },
    containerText:{
      alignSelf:'center',
      fontSize:14,
      color:'#000'
    },
    
  
  });
    export default styles;