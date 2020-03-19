import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Image,TouchableOpacity,Dimensions } from 'react-native';
import styles from './styles.js';
import BackButton from '../backbtn/BackButton.component';
import DynamicBtn from '../dynamicButton/DynamicButton.component';
import  image1 from '../../styles/images/lens/drive/withdrive.png';
import image2 from '../../styles/images/lens/drive/withoutdrive.jpg';
import { ScrollView } from 'react-native-gesture-handler';
import ToggleSwitchBtn from '../toggle/ToggleSwitchBtn';
import StatusBarBackground from '../statusBar/StatusBarBackground';

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
          <StatusBarBackground style={{backgroundColor:'midnightblue'}}/>
                <BackButton navigation={navigation} data={this.state.title} toggleSwitch={this.toggleSwitch} visibility={true}/>

             
               
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