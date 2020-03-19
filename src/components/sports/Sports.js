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
import PAL from "./pal/Pal";
import SV from "./sv/Sv";

const Tab = createMaterialTopTabNavigator();

class Sports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  componentDidMount = () => {
    this.setState({
      title: "Sun & Sports"
    });
  };
  MyTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName={PAL}
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
        <Tab.Screen name="PAL" component={PAL} />
        <Tab.Screen name="SV" component={SV} />
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

export default Sports;
