import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Image,TouchableOpacity,FlatList,ScrollView } from 'react-native';
import CardView from 'react-native-cardview';
import styles from './styles';



 class Coating extends React.Component{

  constructor() {
    super();
    this.state = {
      data: [
        {
            id:0,
            name: 'Mirror Coating',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
         },
         {
            id:1,   
            name: 'Satin Coating',
             avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
          },
        ]
    };
  }

  moveToScreen=(item)=>{
    
    const {navigation} =this.props;
  
    switch(item.id){
      case 0:
        navigation.navigate('MirrorCoating', { name: 'MirrorCoating' })
         break;
         case 1:
         //  navigation.navigate('Multifocal', { name: 'Multifocal' })
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
export default  Coating;