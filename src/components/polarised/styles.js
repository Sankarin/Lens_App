import { StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
    
  
  Container: {  
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
imageContainer: {

  borderWidth:3,
  flex: 1,
  borderColor:'#e2e2e2',
  padding:5,
  justifyContent: 'center',
  alignItems: 'center',
  margin:10,
},
imageStyle:
{
width:Math.round(Dimensions.get('window').width)-35,
height:400,
resizeMode:'center'
},
 
      
  });
    export default styles;