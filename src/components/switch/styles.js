import { StyleSheet } from 'react-native';
const switchStyles = StyleSheet.create({
  textPos: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
  },
  rtl: {
      flexDirection: 'row-reverse'
  },
  ltr: {
      flexDirection: 'row'
  },
  wayBtnActive: {
      borderWidth: 1,
      marginTop: 2,
      marginRight: 2,
      marginLeft: 2
  }

});
export default switchStyles;