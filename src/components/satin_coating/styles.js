import { StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
  },
  videoContainer:{
    width:Math.round(Dimensions.get('window').width)-20,
    height:500,
    margin:5,
    padding:5,
    alignSelf:'center',
  },
  imageContainer: {

    borderWidth:3,
    borderColor:'#e2e2e2',
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
    width:Math.round(Dimensions.get('window').width)-30,
  height:320,
  },
  imageStyle:
  {
    width:Math.round(Dimensions.get('window').width)-50,
  height:300,
  resizeMode:'contain'
},
mediaPlayer: {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: 'white',
},
SignaturePad:{
  width: Math.round(Dimensions.get('window').width)-30,
  height:210,
},
imgFluid:{
  width: Math.round(Dimensions.get('window').width)-30,
  height:210,
},
    
overlayImageStyle:{
  position: 'absolute',
  width:'100%',
  height:210,
  zIndex: 1,
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