import { StyleSheet,Dimensions } from 'react-native';

const styles = StyleSheet.create({
    
        Container: {  
            backgroundColor: "#fff",
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        imageContainer: {

          borderWidth:3,
          borderColor:'#e2e2e2',
          padding:2,
          margin:10,
          justifyContent:'center',
          alignItems:'center',
          flex:1,
        },
        imageStyle:
        {
      
          width:Math.round(Dimensions.get('window').width)-50,
          height:400,
          resizeMode:'cover'
      },
      
  });
    export default styles;