import { StyleSheet,Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  imageContainer: {

    borderWidth:3,
    borderColor:'#e2e2e2',
    margin:5,
    width: Math.round(Dimensions.get('window').width)-10,
  height:500,
  },
  imageStyle:
  {
  zIndex:1,
  resizeMode:'cover',
  position: 'absolute',
  width:'100%',
  height:500,
 opacity: 0.7,
},
overlayImageStyle:{
position: 'absolute',
width:'100%',
height:500,
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