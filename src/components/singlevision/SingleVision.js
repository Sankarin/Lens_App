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
import FinishedFsvLens from './finishedSV/FinishedSV';
import RxFsvLens from './rxSV/RxSV';

const Tab = createMaterialTopTabNavigator();

class SingleVision extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
        }
    }

    componentDidMount = ()=>{

        this.setState({
         title:'Single Vision',
       
     })
   }
   MyTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName={FinishedFsvLens}
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
        <Tab.Screen name="Finished Single Version" component={FinishedFsvLens} />
        <Tab.Screen name="Rx Single Version" component={RxFsvLens} />
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

export default SingleVision;