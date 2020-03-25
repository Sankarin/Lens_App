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
import Colors  from './constant';
import ItemComponent from '../../cardItem/CardItem.component';
import BaseImage from '../../../styles/images/lens/tint/tint-base.png';
import sourceImage from'../../../styles/images/lens/tint/tint.png';
class Soild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            btnList: [],
            image:BaseImage,
            src:sourceImage,
            color:'#ef4242',
        }

    }

    componentDidMount = ()=>{

        this.setState({
         title:'Tints',
         btnList:Colors,
         
         
       
     })


    }
   btnPressed = item => {
   this.setState({
     color:item.colorHex,
   })
  
  };


  reloadImage=(image)=>{
       
    return (<View style={styles.imageContainer}>
      <Image  style={styles.imageStyle} source={image}/>
      <View style={styles.overlay} >
      <Image source={this.state.src} style={[styles.overlayImageStyle,{backgroundColor:this.state.color}]} resizeMode='cover' />
      </View>
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

export default Soild;