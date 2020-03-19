import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Image,TouchableOpacity,FlatList } from 'react-native';
import styles from './styles';


export default class DynamicButton extends Component{

  constructor(props){
    super(props);

   
  }


  buttonColorSet =(data)=>{

      if(data.isSelect) {
        // return styles.containerSelect;
        return styles.container;
      } else {
        return styles.container;
      }
    
  }

  onPressed =(data)=>{

    if(data.isSelect){
      data.isSelect=false
     
    }else{
      data.isSelect=true
   
    }
    this.props.btnPressed(data)
  }
    
   render(){

    const {data}=this.props
    return (
        <TouchableOpacity  style={this.buttonColorSet(data)} onPress={()=>{this.onPressed(data)}}>
          <Text style={styles.containerText}> {data.name}</Text>
        </TouchableOpacity>
    )
   }
  }