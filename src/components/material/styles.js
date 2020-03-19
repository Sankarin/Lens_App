import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
      },

    MainContainer: {
      justifyContent: 'center',
      flex: 1,
      paddingTop: 30,
      alignItems: 'center',
    },
    cardViewStyle:{
      
      alignItems: 'center',
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'center',
      margin:10,
      width:250,
      height:45,
      backgroundColor:'#E2ECEE'
    },
   
    cardView_InsideView:{
      justifyContent: 'center',
      width:"100%",
      alignItems: 'center',
    
     },
    cardView_InsideText:{
   
      fontSize: 13, 
      color: '#000', 
      textAlign: 'center', 
   
    },
  });
    export default styles;