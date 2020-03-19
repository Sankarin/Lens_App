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
import DynamicBtn from "../../dynamicButton/DynamicButton.component";
import ToggleSwitchBtn from '../../toggle/ToggleSwitchBtn';
import standardFsvLens from '../../../styles/images/lens/single/s1_image.png';
import novaFsvLens from '../../../styles/images/lens/single/n1_image.png';

class RxSV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            btnList: [],
            _image:standardFsvLens,
        }
    }

    componentDidMount = ()=>{

        this.setState({
         title:'Single Vision',
         _image:standardFsvLens,
         btnList: [
            {
                id: 0,
                name: "Standard FSV Lens",
              },
              {
                id: 1,
                name: "Nova FSV Lens",
              },
         ],
         
       
     })
   }
   btnPressed = item => {
    switch (item.id) {
      case 0:
        this.setState({
            _image:standardFsvLens,
        });
        break;

      case 1:
        this.setState({
            _image:novaFsvLens,
        });
        break;
      
      default:
    }
  };


  reloadImage=(image)=>{
       
    return <Image  style={styles.imageStyle} source={image}/>
    
}
    
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
               <View style={{ flexDirection: "row", justifyContent: "center", margin:10, }}>
                  <ToggleSwitchBtn
                text1 = ''                     
                text2 = '' 
                switchWidth = {64}              
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
            </View>
                 <View style={{ flexDirection: "row", justifyContent: "center", margin:10, }}>
            {this.state.btnList.map((item, key) => {
              return (
                <DynamicBtn
                  key={key}
                  data={item}
                  navigation={navigation}
                  btnPressed={this.btnPressed}
                />
              );
            })}
          </View>
          <View style={styles.imageContainer}>
                   {this.reloadImage(this.state._image)}
            
            </View>
      </View>
        );
    }
}

export default RxSV;