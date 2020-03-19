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
import nova1 from '../../../styles/images/lens/mulitfocal/pal/UHD_Mask.jpg';
import nova2 from '../../../styles/images/lens/mulitfocal/pal/HD_Mask.jpg';
import nova3 from '../../../styles/images/lens/mulitfocal/pal/Plus_3.0_Mask.jpg';
import nova4 from '../../../styles/images/lens/mulitfocal/pal/Trendfree_2.0_Mask.jpg';
import nova5 from '../../../styles/images/lens/mulitfocal/pal/Delite_Mask.jpg';
import nova6 from '../../../styles/images/lens/mulitfocal/pal/Conventional_Mask.jpg';
import { ScrollView } from 'react-native-gesture-handler';

class Pal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            btnList: [],
            _image:nova1,
        }
    }

    componentDidMount = ()=>{

        this.setState({
         title:'Multifocal',
         _image:nova1,
         btnList: [
            {
                id: 0,
                name: "Nova UHD",
                isSelect:true,
              },
              {
                id: 1,
                name: "Nova HD",
                isSelect:false,
              }, 
              {
                id: 2,
                name: "Nova Plus 3.0",
                isSelect:false,
              },
              {
                id: 3,
                name: "Nova Trendfree 2.0",
                isSelect:false,
              },
              {
                id: 4,
                name: "Nova Delite",
                isSelect:false,
              },
              {
                id: 5,
                name: "Coventional",
                isSelect:false,
              },
         ],
         
       
     })
   }
   btnPressed = item => {
    switch (item.id) {
      case 0:
        this.setState({
            _image:nova1,
        });
        break;

      case 1:
        this.setState({
            _image:nova2,
        });
        break;

        case 2:
          this.setState({
              _image:nova3,
          });
          break;
      
          
          case 3:
            this.setState({
                _image:nova4,
            });
            break;
      
            
            case 4:
              this.setState({
                  _image:nova5,
              });
              break;
      
              
              case 5:
                this.setState({
                    _image:nova6,
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
          <View style={{flex:1, flexDirection: "row", margin:10, }}>
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

export default Pal;