import { StyleSheet,Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
    export default styles;