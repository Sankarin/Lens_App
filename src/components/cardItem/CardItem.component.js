import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Image,TouchableOpacity,FlatList } from 'react-native';
import styles from './styles';
import LinearGradient from "react-native-linear-gradient";


export default class CardItem extends Component{

  constructor(props){
    super(props);

   
  }


  buttonColorSet =(data)=>{

      if(data.isSelect) {
        return styles.containerSelect;
      } else {
        return styles.container;
      }
    
  }

  onPressed =(data,list)=>{

    list.map((elem) => {
      elem.isSelect = false
      if (elem.id === data.id) {
        elem.isSelect = true
      }
  });
    this.props.btnPressed(data)
  }
    
   render(){

    const {data,list}=this.props
    return (
        <TouchableOpacity  style={this.buttonColorSet(data)} onPress={()=>{this.onPressed(data,list)}}>
      <LinearGradient
        style={styles.containerColor}
        colors={[
          data.colorHex,
          data.colorHex1
        ]}
      >

</LinearGradient>
<Text style={styles.containerText}>{data.colorName}</Text>
        </TouchableOpacity>
    )
   }
  }