import React, { Component } from "react";
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
  ImageBackground,
} from "react-native";
import styles from "./styles.js";
import BackButton from "../backbtn/BackButton.component";
import DynamicCircleBtn from "../dynamicCircleBtn/DynamicCircleBtn.component";
import { ScrollView } from "react-native-gesture-handler";
import StatusBarBackground from '../statusBar/StatusBarBackground';

import indoor from '../../styles/images/lens/transition/Indoor.png';
import outdoor from '../../styles/images/lens/transition/outdoor.png';
import specTrans from '../../styles/images/lens/transition/indoor_spectacles.png'
import specGrey from '../../styles/images/lens/transition/indoor_spectacles_grey.png'
import specGreen from '../../styles/images/lens/transition/indoor_spectacles_green.png'
import specBrown from '../../styles/images/lens/transition/indoor_spectacles_brown.png'
import modelBackground from '../../styles/images/lens/transition/transitions.jpg';


class Transitions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      btnList: [],
      visibleBrown: true,
      visibleGreen: false,
      visibleGray: false,
      left: 0,
      opacity: 0,
      src: specBrown,
    };

   
  }

  componentDidMount = ()=> {
    this.setState({
      title: "Transitions",
      btnList: [
        {
          id: 0,
          name: "Brown",
          color:'brown',
          isSelect:true,
        },
        {
          id: 1,
          name: "Green",
          color:'green',
          isSelect:false,
        },
        {
          id: 2,
          name: "Gray",
          color:'gray',
          isSelect:false,
        }
      ]
    });
  };

  btnPressed = item => {
    switch (item.id) {
      case 0:
        this.setState({
          src:specBrown,
          visibleBrown: true,
          visibleGreen: false,
          visibleGray: false
        });
        break;

      case 1:
        this.setState({
          src: specGreen,
          visibleBrown: false,
          visibleGreen: true,
          visibleGray: false
        });
        break;
      case 2:
        this.setState({
          src: specGrey,
          visibleBrown: false,
          visibleGreen: false,
          visibleGray: true
        });
        break;

      default:
    }
  };

  leftButton=(e)=> {
    var left = this.state.left;
    if (this.state.left === 0) {
        e.preventDefault();
    } else {
        left += 50;
        this.setState({ left: left })
    }
    if (this.state.opacity > 0) {
        var opacity = this.state.opacity;
        opacity -= 0.1;
        this.setState({ opacity: opacity })
    } else {
        this.setState({ opacity: 0 })
    }
}
rightButton=(e)=> {
    var left = this.state.left;
    if (this.state.left === -1300) {
        e.preventDefault();
    } else {
        left += -50;
        this.setState({ left: left })
    }
    if (this.state.opacity <= 1) {
        var opacity = this.state.opacity;
        opacity += 0.1;
        this.setState({ opacity: opacity })
    } else if (this.state.opacity > 1.1) {
        opacity = 1.1;
        this.setState({ opacity: opacity })
    }
}
  renderItem =(data,navigation) =>{

  return  <DynamicCircleBtn
    key={data.index}
    data={data.item}
    navigation={navigation}
    btnPressed={this.btnPressed}
    list={this.state.btnList}
  />
  }

 
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.Container}>
           <StatusBarBackground style={{backgroundColor:'midnightblue'}}/>
        <BackButton navigation={navigation} data={this.state.title} visibility={false}/>
        <FlatList 
              horizontal={true}
      data={this.state.btnList}
      renderItem={item => this.renderItem(item,navigation)} 
      keyExtractor={item => item.id.toString()}
      extraData={this.state}
    />
       <ScrollView vertical={true}>
    
        
          <View style={styles.imageContainer}>

         
          <View style={styles.specImage}>
          <Image source={specTrans} style= {[StyleSheet.absoluteFillObject,{width:Math.round(Dimensions.get('window').width-10),height:400,}]} resizeMode='contain' />
          <View style={styles.overlay} >
          <Image source={this.state.src} style={{width:Math.round(Dimensions.get('window').width-10),height:400, opacity: this.state.opacity }} resizeMode='contain' />
          </View>
         
            </View>

            <Image source={modelBackground} style={[styles.mainImage,{left: this.state.left }]}  />

            <View style={styles.btnContainer}>
            <View style={{flex:0.5 ,justifyContent:'flex-start'}}>
            <TouchableOpacity  style={[styles.leftButton]} onPress={this.leftButton}>
              <Image source={indoor}/>
            </TouchableOpacity>
            </View>
             <View style={{flex:0.5 ,justifyContent:'flex-end'}}>
             <TouchableOpacity style={styles.rightButton} onPress={this.rightButton}>
               <Image source={outdoor}/>
             </TouchableOpacity>
             </View>

            </View>
            <View style={styles.textContainer}>

             <Text style={styles.Text}>Click on the arrow to experience the transition effect</Text>
            
            </View>
          
      </View>
        </ScrollView>
      </View>
    );
  }
}

export default Transitions;
