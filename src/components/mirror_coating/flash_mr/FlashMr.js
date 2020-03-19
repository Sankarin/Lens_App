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

import image1 from '../../../styles/images/lens/mirror/flash/gold.jpg';
import image2 from '../../../styles/images/lens/mirror/flash/blue.jpg';
import { ScrollView } from 'react-native-gesture-handler';

class FlashMr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            btnList: [],
            _image:image1,
        }
    }

    componentDidMount = ()=>{

        this.setState({
         title:'Mirror Coating',
         _image:image1,
         btnList: [
            {
                id: 0,
                name: "Gold Mirror",
                isSelect:true,
              },
              {
                id: 1,
                name: "Blue Mirror",
                isSelect:false,
              }, 
             
         ],
         
       
     })
   }
   btnPressed = item => {
    switch (item.id) {
      case 0:
        this.setState({
            _image:image1,
        });
        break;

      case 1:
        this.setState({
            _image:image2,
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
              <ScrollView vertical={true}>
               <View style={{flex:1, flexDirection:'column',}}>      
          
          <View style={{flex:1, flexDirection: "row", margin:10, justifyContent:'center'}}>
            {this.state.btnList.map((item, key) => {
              return (
                <DynamicBtn
                  key={key}
                  data={item}
                  navigation={navigation}
                  btnPressed={this.btnPressed}
                  list={this.state.btnList}
                />
              );
            })}
          </View>
  
               </View>
          <View style={styles.imageContainer}>
                   {this.reloadImage(this.state._image)}
            
            </View>
            </ScrollView>
      </View>
        );
    }
}

export default FlashMr;