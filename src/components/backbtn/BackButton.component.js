import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Image,TouchableOpacity,FlatList } from 'react-native';
import styles from './styles';
import ToggleSwitchBtn from '../toggle/ToggleSwitchBtn';



export default class BackButton extends Component{

    _onPressButton = () =>{
      this.props.navigation.goBack();
    }
   render(){

    const {data,toggleSwitch,visibility}=this.props
    return (
        <TouchableOpacity  style={styles.container} onPress={this._onPressButton}>

       
         <View style={{flex:0.5,justifyContent:'flex-start',flexDirection: "row", }}>
         <Image
            style={styles.containerImage}
            source={require('../../styles/images/back.png')}
          />
          <Text style={styles.containerText}> {data}</Text>
         </View>
         {visibility ?
          <View style={{ flex:0.5,flexDirection: "row", justifyContent: "flex-end", marginEnd:15,
          alignContent:'center', }}>
    
               {/* <ToggleSwitchBtn
                    onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                    text1 = 'ON'                        // optional: first text in switch button --- default ON
                    text2 = 'OFF'                       // optional: second text in switch button --- default OFF
                    switchWidth = {100}                 // optional: switch width --- default 44
                    switchHeight = {44}                 // optional: switch height --- default 100
                    switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                    switchBorderRadius = {100}          // optional: switch border radius --- default oval
                    switchSpeedChange = {500}           // optional: button change speed --- default 100
                    switchBorderColor = '#d4d4d4'       // optional: switch border color --- default #d4d4d4
                    switchBackgroundColor = '#fff'      // optional: switch background color --- default #fff
                    btnBorderColor = '#00a4b9'          // optional: button border color --- default #00a4b9
                    btnBackgroundColor = '#00bcd4'      // optional: button background color --- default #00bcd4
                    fontColor = '#b1b1b1'               // optional: text font color --- default #b1b1b1
                    activeFontColor = '#fff'            // optional: active font color --- default #fff
                />
                 */}
                      <ToggleSwitchBtn
                    text1 = ''                     
                    text2 = '' 
                    onValueChange={(val) => toggleSwitch(val)}      
                    switchWidth = {60}              
                    switchHeight = {34}               
                    switchdirection = 'rtl'            
                    switchBorderRadius = {60}         
                    switchSpeedChange = {300}     
                    switchBorderColor = '#d4d4d4'  
                    switchBackgroundColor = '#fff'     
                    btnBorderColor = '#686C8B'      
                    btnBackgroundColor = '#686C8B'   
                    fontColor = '#b1b1b1'            
                    activeFontColor = '#fff'         
                />
                </View>
          : null}
           
          
          
        </TouchableOpacity>
      );
   }
  }