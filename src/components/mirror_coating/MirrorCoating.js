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
  Dimensions
} from "react-native";
import styles from './styles';
import BackButton from "../backbtn/BackButton.component";
import DynamicBtn from "../dynamicButton/DynamicButton.component";
import { ScrollView } from "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SoildMr from './soild_mr/SoildMr';
import FlashMr from './flash_mr/FlashMr';
import StatusBarBackground from '../statusBar/StatusBarBackground';

const Tab = createMaterialTopTabNavigator();

class MirrorCoating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }
    }
    componentDidMount = ()=>{

        this.setState({
         title:'Mirror Coating',
       
     })
   }
   

   MyTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName={SoildMr}
        tabBarOptions={{
          activeTintColor: "#0D4880",
          inactiveTintColor: "gray",
          labelStyle:{
            fontFamily: 'sans-serif',
            fontWeight: '200',
            fontSize: 12,
            textTransform:'capitalize',
          }
        }}
      >
        <Tab.Screen name="Soild Mirror" component={SoildMr} />
        <Tab.Screen name="Flash Mirror" component={FlashMr} />
      </Tab.Navigator>
    );
  };

    render() {
        const { navigation } = this.props;
        return (
          <View style={styles.Container}>
               <StatusBarBackground style={{backgroundColor:'midnightblue'}}/>
            <BackButton navigation={navigation} data={this.state.title}  visibility={false} />
            
            <View style={styles.Container}>{this.MyTabs()}</View>
          </View>
        );
    }
}


export default MirrorCoating;