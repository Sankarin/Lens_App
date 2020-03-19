import React,{useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Image,TouchableOpacity,FlatList,ScrollView } from 'react-native';
import CardView from 'react-native-cardview';
import styles from './styles';



 class Material extends React.Component{

  constructor() {
    super();
    this.state = {
      data: [
        {
            id:0,
            name: 'UV Max',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
         },
         {
            id:1,   
            name: 'Blumax',
             avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
          },
          {
             id: 2,
             name: 'Transitions',
             avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
          },
          {
            id:3,
            name: 'Drivewear',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
         },
         {
            id:4,   
            name: 'Polarised',
             avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
          },
          {
             id: 5,
             name: 'Tints',
             avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
          },
          {
            id:6,
            name: 'Thickness',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
         },
        ]
    };
  }

 

  componentDidMount= () =>{
    this.props.navigation.addListener('willFocus', (route) => {
      console.log(route.name)
    });
} 

  moveToScreen=(item)=>{
        const {navigation} =this.props
 switch(item.id){
   case 0:
    navigation.navigate('UVMax', { name: 'UVMax' })
     break;
     case 1:  
      navigation.navigate('Blumax', { name: 'Blumax' })
       break;
       case 3:  
       navigation.navigate('DriverWear', { name: 'DriverWear' })
        break;
       case 4:  
       navigation.navigate('Polarised', { name: 'Polarised' })
        break;
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

export default  Material;