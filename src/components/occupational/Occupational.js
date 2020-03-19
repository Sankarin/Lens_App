import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Image,TouchableOpacity,FlatList,Dimensions } from 'react-native';
import styles from './styles.js';
import BackButton from '../backbtn/BackButton.component';
import DynamicBtn from '../dynamicButton/DynamicButton.component';
import  image1 from '../../styles/images/lens/occupational/ttp13.jpg';
import image2 from '../../styles/images/lens/occupational/ttp14.jpg';
import image3 from '../../styles/images/lens/occupational/ttp15.jpg';
import { ScrollView } from 'react-native-gesture-handler';

class Occupational extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            _image:image1,
            btnList:[]
        }
    }
    btnPressed = item =>{

     switch(item.id){
         case 0:
            this.setState({
                _image:image1
            })
            break;

            case 1:
                this.setState({
                    _image:image2
                })
                break;
                case 2:
                    this.setState({
                        _image:image3
                    })
                    break;
              
                    default:
                        
     }
    }
    reloadImage=(image)=>{
       
        return <Image  style={styles.imageStyle} source={image}/>
        
    }
   
    componentDidMount = ()=>{

       this.setState({
        title:'Occupational',
        btnList:[
            {
                id:0,
                name: 'Nova Desk',
             },
             {
                id:1,   
                name: 'Nova Office Pro',
              },
              {
                 id:2,   
                 name: 'Nova Room',
               },
        ]
    })
    console.log(this.state._image)
  }
    render() {
        const {navigation}= this.props;

        return (
           <View style={styles.Container}> 
                    <BackButton navigation={navigation} data={this.state.title} />

               <ScrollView vertical={true}>
               <View style={{flexDirection:'column',alignItems:'center'}}>
                        {
                         this.state.btnList.map((item,key)=>{
                            return (
                                <DynamicBtn key={key} data={item} navigation={navigation} btnPressed={this.btnPressed}/>
                            )
                         })
                        }
                    
                    
                 </View>
                <View style={styles.imageContainer}>
                   {this.reloadImage(this.state._image)}
            
            </View>
               </ScrollView>
           </View>
        );
    }
}


export default Occupational;