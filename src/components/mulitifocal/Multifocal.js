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
import Bifocal from './bifocal/Bifocal';
import Pal from './pal/Pal';

const Tab = createMaterialTopTabNavigator();

class Multifocal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }
    }
    componentDidMount = ()=>{

        this.setState({
         title:'Multi Focal',
       
     })
   }

   MyTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName={Bifocal}
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
        <Tab.Screen name="Bifocal" component={Bifocal} />
        <Tab.Screen name="Pal" component={Pal} />
      </Tab.Navigator>
    );
  };

    render() {
        const { navigation } = this.props;
        return (
          <View style={styles.Container}>
            <BackButton navigation={navigation} data={this.state.title} />
    
            <View style={styles.Container}>{this.MyTabs()}</View>
          </View>
        );
    }
}


export default Multifocal;