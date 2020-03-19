import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
      },

    MainContainer: {
      justifyContent: 'center',
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
      alignItems: 'center',
      
    },
    containerImage: {
      flex: 0.5,
      justifyContent: 'center',
      backgroundColor: '#fff',
      alignItems: 'center',
      
    },
    cardViewStyle:{
 
      width: 250, 
      height: 70,
      justifyContent:'center',
      margin:15,
   
    },
   
    cardView_InsideView:{
   
      justifyContent:'center',
   
    },
    cardView_InsideText:{
   
      fontSize: 15, 
      color: '#000', 
      textAlign: 'center', 
      justifyContent:'center',
   
    },
    image:{
      justifyContent:'center',
      alignContent:'center',
    }
  });
    export default styles;