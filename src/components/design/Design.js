import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Image,TouchableOpacity,FlatList,ScrollView } from 'react-native';
import CardView from 'react-native-cardview';
import styles from './styles';



 class Design extends React.Component{

  constructor() {
    super();
    this.state = {
      data: [
        {
            id:0,
            name: 'Single Vision',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
         },
         {
            id:1,   
            name: 'Multi Focal',
             avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
          },
          {
             id: 2,
             name: 'Occupational',
             avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
          },
          {
            id:3,
            name: 'Sun & Sports',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
         },
         {
            id:4,   
            name: 'Drive',
             avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
          },
        ]
    };
  }

  moveToScreen=(item)=>{
    const {navigation} =this.props
    switch(item.id){
      case 0:
        navigation.navigate('SingleVision', { name: 'SingleVision' })
         break;
         case 1:
           navigation.navigate('Multifocal', { name: 'Multifocal' })
            break;
      case 2:
       navigation.navigate('Occupational', { name: 'Occupational' })
        break;
        case 3:
          navigation.navigate('Sports', { name: 'Sports' })
          break;
        case 4:
          navigation.navigate('Drive', { name: 'Drive' })
           break;
           default:
    }
}

renderData(data) {
  if (data.length === 0) {
    return (
      <Text style={{ textAlign: 'center', padding: 10 }}>Data Empty</Text>
    );
  }
  return data.map(item => {
    return (
      <CardView
        key={item.id}
        style={styles.cardViewStyle}
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
      >
        <TouchableOpacity
          style={styles.cardView_InsideView}
          onPress={() => {this.moveToScreen(item)}}
        >
          <Text style={styles.cardView_InsideText}>{item.name}</Text>
        </TouchableOpacity>
      </CardView>
    );
  });
}

  render(){
    const { data, value } = this.state;

      return (
        <SafeAreaView style={styles.safeAreaView}>
           <View style={styles.MainContainer}>
            <ScrollView  >
            <View style={{  flex:1}}>
              <View>{this.renderData(data,value)}</View>
            </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      );
  }
 }

export default  Design;