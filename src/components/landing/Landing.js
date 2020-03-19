import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Image,TouchableOpacity,FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Material from '../material/Material';
import Design from '../design/Design';
import Coating from '../coating/Coating';

const Tab = createBottomTabNavigator();

 class Landing extends React.Component{

  constructor(){
    super();
   
  }
  
  render(){
    const {route} = this.props;
    const { initialTab } = route.params;
    return(
      <Tab.Navigator initialRouteName={initialTab}
       screenOptions={({route})=>
      ({
           tabBarIcon:({ focused,tintColor }) => {
            if (route.name === 'Material')
            {
              return  ( <Image
                source={require('../../styles/images/lens/frameicon.jpeg') } 
                style={{width:30, height: 30, resizeMode:'cover'}}
                 
            />) 
            } else  if (route.name === 'Design')
            {
              return  ( <Image
                source={require('../../styles/images/lens/frameicon.jpeg') } 
                style={{width:30, height: 30}}
                 
            />) 
            }   else  if (route.name === 'Coating')
            {
              return  ( <Image
                source={require('../../styles/images/lens/frameicon.jpeg') } 
                style={{width:30, height: 30}}
                 
            />) 
            }
           

      },
      title:route.name,
    
      })

    }
  
      tabBarOptions={{
        activeTintColor: '#0D4880',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Material" component={Material}  listeners={{
      tabPress: route => {
        const {navigation}=this.props
        navigation.title='ddd'
    },
  }}/>
        <Tab.Screen name="Design" component={Design} />
        <Tab.Screen name="Coating" component={Coating}  />
        </Tab.Navigator>
    )
 }
 }
export default  Landing;