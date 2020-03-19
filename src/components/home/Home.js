import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Image,TouchableOpacity,FlatList } from 'react-native';
import Logo from '../../styles/images/oic-logo.png';
import styles from './styles';
import CardView from 'react-native-cardview'


export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
          value: 2,
          data: [
            {
                id:0,
                name: 'MATERIAL',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
             },
             {
                id:1,   
                name: 'DESIGN',
                 avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
              },
              {
                 id: 2,
                 name: 'COATING',
                 avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
              }
          ]
        };
      }
      
      moveToLandingScreen=(item)=>{
      
        var tabPos=''
          switch(item.id){
            case 0:
              tabPos='Material'
              break;
              case 1:
                tabPos= 'Design'
              break;
              case 2:
                tabPos='Coating'
              break;
          }
         
              const {navigation} =this.props;
              navigation.navigate('Landing', { name: 'LensConsultant' ,initialTab:tabPos})
      }



      renderData(item,value) {
        
          return (

            <CardView
            style={styles.cardViewStyle}
            cardElevation={value}
            cardMaxElevation={value}
            cornerRadius={5}
            cornerOverlap={false}
          > 
              <TouchableOpacity style={styles.cardView_InsideView}
                 onPress={() => this.moveToLandingScreen(item)}
              >
                <Text style={styles.cardView_InsideText}>{item.name}</Text>
              </TouchableOpacity>
            
          </CardView>
            
          );
        };
      
    
  render() {
    const { data, value } = this.state;
    return (
      <SafeAreaView style={styles.safeAreaView}>
         <View style={styles.MainContainer}>
         <View style={styles.containerImage}>
        <Image
          source={Logo}
          style={styles.image}
        />
        </View>
        <View style={styles.container}>
        <FlatList
      
          
          data={ this.state.data }

        renderItem={({item}) =>this.renderData(item,value)}
        numColumns={1}
          keyExtractor={(item, index) => index.toString()}
     />
            </View>
            </View>
      </SafeAreaView>
    );
  }
}

