import { StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
    
  
  Container: {  
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
imageContainer: {
  overflow: "hidden",
  height: 500,
  width: 2500,
  margin: "auto",
},
specImage : {
 zIndex: 10,
  position: 'absolute',
  width: 1003,
  top:'10%',
  
},
mainImage:{
  height: '100%',
  width:'100%',
},
leftButton:{
  position: 'absolute',
  top: '80%',
  marginLeft: '3%',
  zIndex:10,
},
rightButton:{
  position: 'absolute',
  top: '80%',
 marginLeft: '30%',
  zIndex:10,
},
btnContainer : {
   bottom:'4%',
   flexDirection:'row',
   width:Math.round(Dimensions.get('window').width),
   
 },
 textContainer : {
  bottom:'2%',
  flexDirection:'row',
  width:Math.round(Dimensions.get('window').width),
  justifyContent:'center',
  alignItems:'center'
  
},
Text:{
  textAlign: 'center',
  padding: 5,
  marginTop: 5,
  backgroundColor: '#333',
  color: '#fff',
  fontFamily: 'sans-serif',
fontSize:12,
bottom:'1%',
},
imageStyle:
{
width:Math.round(Dimensions.get('window').width)-35,
height:400,
resizeMode:'center'
},
absoluteFillObject:{
  position: 'absolute',
 top: 0,
 left: 0,
 right: 0,
 bottom: 0,
},
overlay: {
  ...StyleSheet.absoluteFillObject,
},
  });
    export default styles;