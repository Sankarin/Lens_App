import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Image,TouchableOpacity,FlatList,Dimensions } from 'react-native';
import styles from './styles.js';
import BackButton from '../backbtn/BackButton.component';
import DynamicBtn from '../dynamicButton/DynamicButton.component';
import  image1 from '../../styles/images/lens/blumax/Without_Blumax.jpg';
import image2 from '../../styles/images/lens/blumax/With_Blumax.jpg';

class Blumax extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            _image:image1,
            btnList:[]
        }
    }
    btnPressed = item =>{
        
        if(item.id==0){

            this.setState({
                _image:image1,
            })
           
        }else{
            this.setState({
                _image:image2,
            })
        }
    }
    reloadImage=(image)=>{
       
        return <Image  style={styles.imageStyle} source={image}/>
        
    }
   
    componentDidMount = ()=>{

       this.setState({
        title:'Blumax',
        btnList:[
            {
                id:0,
                name: 'Ordinary Lens',
                isSelect:false,
             },
             {
                id:1,   
                name: 'Blumax Lens',
                isSelect:false,
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

                    <View style={{flexDirection:'row'}}>
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
           </View>
        );
    }
}

export default Blumax;