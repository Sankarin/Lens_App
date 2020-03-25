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
import styles from "./styles";
import BackButton from "../backbtn/BackButton.component";
import { ScrollView } from "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import StatusBarBackground from '../statusBar/StatusBarBackground';
import Soild from './soild/Soild';
import Gradient from './gradient/Gradient';

const Tab = createMaterialTopTabNavigator();

class Tints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  componentDidMount = () => {
    this.setState({
      title: "Tints"
    });
  };
  MyTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName={Soild}
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
        <Tab.Screen name="Soild" component={Soild} />
        <Tab.Screen name="Gradient" component={Gradient} />
      </Tab.Navigator>
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.Container}>
           <StatusBarBackground style={{backgroundColor:'midnightblue'}}/>
        <BackButton navigation={navigation} data={this.state.title} visibility={false}/>

        <View style={styles.Container}>
          {this.MyTabs()}
          </View>
      </View>
    );
  }
}

export default Tints;
