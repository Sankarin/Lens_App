import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Image,TouchableOpacity,Dimensions } from 'react-native';
import styles from './styles.js';
import BackButton from '../backbtn/BackButton.component';
import DynamicBtn from '../dynamicButton/DynamicButton.component';
import  image1 from '../../styles/images/lens/drive/withdrive.png';
import image2 from '../../styles/images/lens/drive/withoutdrive.jpg';
import { ScrollView } from 'react-native-gesture-handler';
import ToggleSwitchBtn from '../toggle/ToggleSwitchBtn';

class Drive extends Component {   constructor(props){
    super(props);
    this.state={
        title:'',
        _image:image1,
    }
}

reloadImage=(image)=>{
   
    return <Image  style={styles.imageStyle} source={image}/>
    
}

componentDidMount = ()=>{

   this.setState({
    title:'Drive',
  
})
}

toggleSwitch = (value) => {
    switch(value){
        case 1:
           this.setState({
               _image:image1
           })
           break;
   
           case 2:
               this.setState({
                   _image:image2
               })
               break;
             
                   default:
                       
    }
 }
 
render() {
    const {navigation}= this.props;

    return (
       <View style={styles.Container}> 
                <BackButton navigation={navigation} data={this.state.title} />

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
                onValueChange={(val) => this.toggleSwitch(val)}      
                switchWidth = {70}              
                switchHeight = {34}               
                switchdirection = 'rtl'            
                switchBorderRadius = {70}         
                switchSpeedChange = {300}     
                switchBorderColor = '#d4d4d4'  
                switchBackgroundColor = '#fff'     
                btnBorderColor = '#00a4b9'      
                btnBackgroundColor = '#00bcd4'   
                fontColor = '#b1b1b1'            
                activeFontColor = '#fff'         
            />
            
            {/* { this.toggleSwitch(this.state.activeSwitch) } */}
               
           <ScrollView vertical={true}>
            <View style={styles.imageContainer}>
               {this.reloadImage(this.state._image)}
        
        </View>
           </ScrollView>
       </View>
    );
}
}

export default Drive;