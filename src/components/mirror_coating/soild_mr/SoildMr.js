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
import { ScrollView } from 'react-native-gesture-handler';

import image1 from '../../../styles/images/lens/mirror/soild/pink.jpg';
import image2 from '../../../styles/images/lens/mirror/soild/red.jpg';
import image3 from '../../../styles/images/lens/mirror/soild/bronze.jpg';
import image4 from '../../../styles/images/lens/mirror/soild/silver.jpg';

class SoildMr extends Component {
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
                name: "Pink Mirror",
                isSelect:true,
              },
              {
                id: 1,
                name: "Red Mirror",
                isSelect:false,
              },
              {
                id: 2,
                name: "Bronze Mirror",
                isSelect:false,
              },
              {
                id: 3,
                name: "Sliver Metalic Mirror",
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
        case 2:
          this.setState({
              _image:image3,
          });
          break;
        case 3:
          this.setState({
              _image:image4,
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
               <View style={{flex:1, flexDirection:'column'}}>  
             <ScrollView horizontal={true}>
             <View style={{ flex:1, flexDirection: "row", margin:10, }}>
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
          </ScrollView>
          </View>
          <View style={styles.imageContainer}>
                   {this.reloadImage(this.state._image)}
            
            </View>
            </ScrollView>
      </View>
        );
    }
}

export default SoildMr;