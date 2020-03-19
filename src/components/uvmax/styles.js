import { StyleSheet,Dimensions } from 'react-native';

const styles = StyleSheet.create({
    
  MainContainer: {  
    backgroundColor: "#fff",
    flex:1,
},
    
        Container: {  
            backgroundColor: "#fff",
            justifyContent: 'center',
            alignItems: 'center',
        },
        imageContainer: {

          borderWidth:3,
          borderColor:'#e2e2e2',
          padding:10,
          justifyContent: 'center',
          alignItems: 'center',
          margin:10,
          marginTop:90,
          width:Math.round(Dimensions.get('window').width)-15,
        height:420,
        },
      
  });
    export default styles;