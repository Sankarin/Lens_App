/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import 'react-native-gesture-handler';

import Home from './src/components/home/Home';
import Landing from './src/components/landing/Landing';
import UVMax from './src/components/uvmax/UvMax';
import Blumax from './src/components/blumax/BluMax';
import Polarised from './src/components/polarised/Polarised';
import Occupational from './src/components/occupational/Occupational';
import DriverWear from './src/components/drivewear/Drivewear';
import Drive from './src/components/drive/Drive';
import SingleVision from './src/components/singlevision/SingleVision';
import Multifocal from './src/components/mulitifocal/Multifocal';
import Sports from './src/components/sports/Sports';
import MirrorCoating from './src/components/mirror_coating/MirrorCoating';
import Transitions from './src/components/transition/Transition';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const navigationOptions = {
  title: (navigation) => (navigation.state.params.title),
};

const App= ()  => {
  return (
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Home} options={{ headerShown:false, headerBackground:'#fff' }} />
      <Stack.Screen name="Landing" component={Landing} 
          options={({ route }) => ({ 
            title: route.params.name 
          })}/>
            <Stack.Screen name="UVMax" component={UVMax} options={{ headerShown:false, headerBackground:'#fff' }} />
            <Stack.Screen name="Blumax" component={Blumax}  options={{ headerShown:false, headerBackground:'#fff' }} />
            <Stack.Screen name="Transitions" component={Transitions}  options={{ headerShown:false, headerBackground:'#fff' }} />
            <Stack.Screen name="Polarised" component={Polarised}  options={{ headerShown:false, headerBackground:'#fff' }} />
            <Stack.Screen name="Occupational" component={Occupational}  options={{ headerShown:false, headerBackground:'#fff' }} />
            <Stack.Screen name="DriverWear" component={DriverWear}  options={{ headerShown:false, headerBackground:'#fff' }} />
            <Stack.Screen name="Drive" component={Drive}  options={{ headerShown:false, headerBackground:'#fff' }} />
            <Stack.Screen name="SingleVision" component={SingleVision}  options={{ headerShown:false, headerBackground:'#fff' }} />
            <Stack.Screen name="Multifocal" component={Multifocal}  options={{ headerShown:false, headerBackground:'#fff' }} />
            <Stack.Screen name="Sports" component={Sports}  options={{ headerShown:false, headerBackground:'#fff' }} />
            <Stack.Screen name="MirrorCoating" component={MirrorCoating}  options={{ headerShown:false, headerBackground:'#fff' }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
