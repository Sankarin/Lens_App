import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Image,TouchableOpacity,FlatList } from 'react-native';
import styles from './styles';


export default class BackButton extends Component{

    _onPressButton = () =>{
      this.props.navigation.goBack();
    }
   render(){

    const {data}=this.props
    return (
        <TouchableOpacity  style={styles.container} onPress={this._onPressButton}>

       
          <Image
            style={styles.containerImage}
            source={require('../../styles/images/back.png')}
          />
          <Text style={styles.containerText}> {data}</Text>
        </TouchableOpacity>
      );
   }
  }