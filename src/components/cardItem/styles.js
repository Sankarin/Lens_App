import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
    container: {
       flexDirection:'row', 
         borderColor:'gainsboro', 
         borderWidth:1,
         padding:5,
         margin:5,
         width:150,
         height:45,
         justifyContent:'flex-start'
        },
        containerSelect: {
          flexDirection:'row', 
            borderColor:'dimgray', 
            borderWidth:1,
            padding:5,
            margin:5,
            width:150,
            height:45,
            backgroundColor:'gainsboro',
           },
    containerText:{
      alignSelf:'center',
      fontSize:14,
      color:'#000',
      marginLeft:5,
    },
    
    containerColor:{
      width: 25 * 2,
      height: 25,
      alignSelf:'center',
    },
  });
    export default styles;