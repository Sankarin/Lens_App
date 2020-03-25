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
  Dimensions
} from "react-native";
import styles from "./styles.js";
import WithoutPolarised from "../../styles/images/lens/polarised/withoutpolarised.jpg";
import PolarisedGreen from "../../styles/images/lens/polarised/polarised_green.jpg";
import PolarisedBrown from "../../styles/images/lens/polarised/polarised_brown.jpg";
import PolarisedGrey from "../../styles/images/lens/polarised/polarised_grey.jpg";
import BackButton from "../backbtn/BackButton.component";
import DynamicCircleBtn from "../dynamicCircleBtn/DynamicCircleBtn.component";
import { ScrollView } from "react-native-gesture-handler";
import ComparisonSlider from "../comparison_slider/ComparisonSlider";
import StatusBarBackground from '../statusBar/StatusBarBackground';

class Transition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      btnList: [],
      visibleBrown: true,
      visibleGreen: false,
      visibleGray: false
    };
  }

  componentDidMount = ()=> {
    this.setState({
      title: "Polarised",
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
          visibleBrown: true,
          visibleGreen: false,
          visibleGray: false
        });
        break;

      case 1:
        this.setState({
          visibleBrown: false,
          visibleGreen: true,
          visibleGray: false
        });
        break;
      case 2:
        this.setState({
          visibleBrown: false,
          visibleGreen: false,
          visibleGray: true
        });
        break;

      default:
    }
  };

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
        <ScrollView vertical={true}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
          <FlatList 
              horizontal={true}
      data={this.state.btnList}
      renderItem={item => this.renderItem(item,navigation)} 
      keyExtractor={item => item.id.toString()}
      extraData={this.state}
    />
         
          </View>
          <View style={styles.imageContainer}>
            {this.state.visibleBrown == true ? (
              <ComparisonSlider
                imageWidth={Math.round(Dimensions.get("window").width) - 45}
                imageHeight={400}
                initialPosition={50}
                leftImage={WithoutPolarised}
                rightImage={PolarisedBrown}
              />
            ) : null}
            {this.state.visibleGreen == true ? (
              <ComparisonSlider
                imageWidth={Math.round(Dimensions.get("window").width) - 45}
                imageHeight={400}
                initialPosition={50}
                leftImage={WithoutPolarised}
                rightImage={PolarisedGreen}
              />
            ) : null}
            {this.state.visibleGray == true ? (
              <ComparisonSlider
                imageWidth={Math.round(Dimensions.get("window").width) - 45}
                imageHeight={400}
                initialPosition={50}
                leftImage={WithoutPolarised}
                rightImage={PolarisedGrey}
              />
            ) : null}
            {/* <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
            <View style={{flex:1,alignItems:'center'}}>
            <Text >Standard Lens</Text>
            </View>
            <View style={{flex:1,alignItems:'center'}}>
            <Text >Polarised</Text>
            </View>
            </View> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Transition;
