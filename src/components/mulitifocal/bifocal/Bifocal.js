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
import standardFsvLens from '../../../styles/images/lens/mulitfocal/bifocal/ordinary_bifocal.jpg';
import novaFsvLens from '../../../styles/images/lens/mulitfocal/bifocal/digital_bifocal.jpg';
import { ScrollView } from 'react-native-gesture-handler';

class Bifocal extends Component {
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
         title:'Multifocal',
         _image:standardFsvLens,
         btnList: [
            {
                id: 0,
                name: "Ordinary Bifocal",
                isSelect:true,
              },
              {
                id: 1,
                name: "Nova Digital Bifocal",
                isSelect:false,
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
          <View style={styles.imageContainer}>
                   {this.reloadImage(this.state._image)}
            
            </View>
      </View>
        );
    }
}

export default Bifocal;