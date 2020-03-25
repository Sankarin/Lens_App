import { StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
    
  
  Container: {  
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
imageContainer: {


  backgroundColor: "#fff",
  flex: 1,
  flexDirection:'row',
  margin:15,
  padding:15,

},
imageStyle:
{
width:Math.round(Dimensions.get('window').width)-35,
height:400,
resizeMode:'center'
},
leftImage:{
  width:Math.round(Dimensions.get('window').width)-35,
  height:400,
},
rightImage:{
  transform: [{scaleX:-1},{scaleY:1}],
  width:Math.round(Dimensions.get('window').width)-35,
  height:400,
}
      
  });
    export default styles;