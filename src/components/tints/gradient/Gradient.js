import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import ItemComponent from '../../cardItem/CardItem.component';
import GRADIENT  from './constant';
import BaseImage from '../../../styles/images/lens/tint/tint-base.png';
import sourceImage from'../../../styles/images/lens/tint/tint.png';
import LinearGradient from "react-native-linear-gradient";

class Gradient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            btnList: [],

            image:BaseImage,
            src:sourceImage,
            startColor:'#ef4242',
            endColor:'#fff0'
        }
    }

    componentDidMount = ()=>{

        this.setState({
         title:'Tints',
         btnList:GRADIENT,
      
         
       
     })
   }

  btnPressed = item => {
    this.setState({
      startColor:item.colorHex,
    })
   
   };
 
 
   reloadImage=(image)=>{
        
     return (<View style={styles.imageContainer}>
       <Image  style={styles.imageStyle} source={image}/>
       <LinearGradient
        style={styles.overlay}
        colors={[
          this.state.startColor,
          this.state.endColor
        ]}
      >
    <Image source={this.state.src} style={[styles.overlayImageStyle]} resizeMode='cover' />
</LinearGradient>
       
     </View>)
     
 }
    
 renderItem=(data,navigation)=>{
  return  <ItemComponent key={data.index} data={data.item} navigation={navigation} btnPressed={this.btnPressed} list={this.state.btnList}/>
  
}
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                   <FlatList 
              vertical={true}
      data={this.state.btnList}
      renderItem={item => this.renderItem(item,navigation)} 
      keyExtractor={item => item.id.toString()}
      extraData={this.state}
    />
     <ScrollView vertical={true}>
          
    {this.reloadImage(this.state.BaseImage)}
           
      </ScrollView>
      </View>
        );
    }
}

export default Gradient;