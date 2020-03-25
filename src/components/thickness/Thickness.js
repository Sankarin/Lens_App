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
  Dimensions,
  Picker,
} from "react-native";
import styles from "./styles";
import BackButton from "../backbtn/BackButton.component";
import { ScrollView } from "react-native-gesture-handler";
import StatusBarBackground from '../statusBar/StatusBarBackground';
import { obj } from "./constant";
import leftImage from '../../styles/images/lens/thickness/index/I-150+0.png';
import rightImage from '../../styles/images/lens/thickness/index/I-150+0.png';
import { round } from "react-native-reanimated";

class Thickness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      valueLeft: "",
      initialLeftImg: leftImage,
      initialRightImg: rightImage,
      LeftIndex: "+1.50",
      LeftPower: "0",
      RightIndex: "+1.50",
      RightPower: "0",

      indexListR:[],
      powerListR:[],
      indexListL:[],
      powerListL:[],
    };
  }

  componentDidMount = () => {
    this.setState({
      title: "Thickness",
      indexListR:[
       { id:0,
        name:'+1.50',
        isSelected:false,
      },
      { id:1,
        name:'+1.60',
        isSelected:false,
      }
      ],
      indexListL:[
        { id:0,
         name:'+1.50',
         isSelected:false,
       },
       { id:1,
         name:'+1.60',
         isSelected:false,
       }
       ],
       powerListR:[
        { id:0,
         name:'+10',
         isSelected:false,
       },
       { id:1,
         name:'+8',
         isSelected:false,
       },
       { id:2,
        name:'+6',
        isSelected:false,
      },
      { id:3,
        name:'+4',
        isSelected:false,
      },

      { id:4,
        name:'+2',
        isSelected:false,
      },
      { id:5,
        name:'0',
        isSelected:false,
      }, 
       { id:6,
        name:'-2',
        isSelected:false,
      },
      { id:7,
        name:'-4',
        isSelected:false,
      },
      { id:8,
       name:'-6',
       isSelected:false,
     },
     { id:9,
       name:'-8',
       isSelected:false,
     },

     { id:10,
       name:'-10',
       isSelected:false,
     },
      
       ],

       powerListL:[
        { id:0,
         name:'+10',
         isSelected:false,
       },
       { id:1,
         name:'+8',
         isSelected:false,
       },
       { id:2,
        name:'+6',
        isSelected:false,
      },
      { id:3,
        name:'+4',
        isSelected:false,
      },

      { id:4,
        name:'+2',
        isSelected:false,
      },
      { id:5,
        name:'0',
        isSelected:false,
      }, 
       { id:6,
        name:'-2',
        isSelected:false,
      },
      { id:7,
        name:'-4',
        isSelected:false,
      },
      { id:8,
       name:'-6',
       isSelected:false,
     },
     { id:9,
       name:'-8',
       isSelected:false,
     },

     { id:10,
       name:'-10',
       isSelected:false,
     },
      
       ],

    });
  };

onPickerValueChangeIndex=( right,left,isRight)=>{
    this.setState(
      {
        RightIndex:right,
        LeftIndex: left,
        
      },
      () => {
       
        this.handleChange(isRight)
        
      }
    );
  }
  onPickerValueChangePower=( right,left,isRight)=>{
    this.setState(
      {
        RightPower:right,
        LeftPower: left
      },
      () => {
       
        this.handleChange(isRight)
        
      }
    );
  }
  handleChange = (isRight) =>{

    let { RightIndex,RightPower,LeftIndex,LeftPower } = this.state;
    let img = require('../../styles/images/lens/thickness/index/I-150+0.png');

    if(isRight){

    var index=RightIndex
    var power=RightPower;
    }else{

    var index=LeftIndex
    var power=LeftPower;
    }

    
    if (index === "+1.50") {
        if (power === "-10") {
            img = require('../../styles/images/lens/thickness/power/150/I-150-10.png');
        }
        else if (power === "-8") {
            img = require('../../styles/images/lens/thickness/power/150/I-150-8.png');
        }
        else if (power === "-6") {
            img = require('../../styles/images/lens/thickness/power/150/I-150-6.png');
        }
        else if (power === "-4") {
            img = require('../../styles/images/lens/thickness/power/150/I-150-4.png');
        }
        else if (power === "-2") {
            img = require('../../styles/images/lens/thickness/power/150/I-150-2.png');
        }
        else if (power === "+2") {
            img = require('../../styles/images/lens/thickness/power/150/I-150+2.png');
        }
        else if (power === "+4") {
            img = require('../../styles/images/lens/thickness/power/150/I-150+4.png');
        }
        else if (power === "+6") {
            img = require('../../styles/images/lens/thickness/power/150/I-150+6.png');
        }
        else if (power === "+8") {
            img = require('../../styles/images/lens/thickness/power/150/I-150+8.png');
        }
        else if (power === "+10") {
            img = require('../../styles/images/lens/thickness/power/150/I-150+10.png');
        }
    } else if (index === "+1.60") {
        if (power === "-10") {
            img = require('../../styles/images/lens/thickness/power/160/I-160-10.png');
        }
        else if (power === "-8") {
            img = require('../../styles/images/lens/thickness/power/160/I-160-8.png');
        }
        else if (power === "-6") {
            img = require('../../styles/images/lens/thickness/power/160/I-160-6.png');
        }
        else if (power === "-4") {
            img = require('../../styles/images/lens/thickness/power/160/I-160-4.png');
        }
        else if (power === "-2") {
            img = require('../../styles/images/lens/thickness/power/160/I-160-2.png');
        }
        else if (power === "+2") {
            img = require('../../styles/images/lens/thickness/power/160/I-160+2.png');
        }
        else if (power === "+4") {
            img = require('../../styles/images/lens/thickness/power/160/I-160+4.png');
        }
        else if (power === "+6") {
            img = require('../../styles/images/lens/thickness/power/160/I-160+6.png');
        }
        else if (power === "+8") {
            img = require('../../styles/images/lens/thickness/power/160/I-160+8.png');
        }
        else if (power === "+10") {
            img = require('../../styles/images/lens/thickness/power/160/I-160+10.png');
        }
    }
    if(isRight){

        this.setState({ initialRightImg: img})
    }else{

        this.setState({ initialLeftImg: img})
    }

  }
 


  loadData(list) {
    return list.map((item,index)=>{
      return  <Picker.Item label={item.name} value={item.name}/>
    })
  }
  reloadImage=()=>{
       
    return (
      <View style={styles.imageContainer}>
      <Image source={this.state.initialRightImg} style={styles.leftImage} resizeMode='contain'/>
      <Image source={this.state.initialLeftImg} style={styles.rightImage} resizeMode='contain'/>
      </View>
      )
    
}
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.Container}>
           <StatusBarBackground style={{backgroundColor:'midnightblue'}}/>
        <BackButton navigation={navigation} data={this.state.title} visibility={false}/>

       {this.reloadImage()}
<View style={{flex:1,flexDirection:'row'}}>


<View style={{flexDirection:'column',justifyContent:'center',margin:10}}>

<Text style={{justifyContent:'center'}}>Right Eye</Text>
          <Picker
  selectedValue={this.state.RightIndex}
  style={{height: 50,width:150, }}
  onValueChange={(itemValue) => this.onPickerValueChangeIndex(itemValue,this.state.LeftIndex,true)
  }>
     {this.loadData(this.state.indexListR)}

</Picker>
<Picker
  selectedValue={this.state.RightPower}
  style={{height: 50, width:150,fontSize:10,}}
  onValueChange={(itemValue) => this.onPickerValueChangePower(itemValue,this.state.LeftPower,true)
  }>
     {this.loadData(this.state.powerListR)}
 
</Picker>

        </View>
        <View style={{flexDirection:'column',justifyContent:'center',margin:10}}>
         

    <Text style={{justifyContent:'center'}}>Left Eye</Text>
        <Picker
  selectedValue={this.state.LeftIndex}
  style={{height: 50,width:150, fontSize:10,}}
  onValueChange={(itemValue) => this.onPickerValueChangeIndex(this.state.RightIndex,itemValue,false)
  }>

{this.loadData(this.state.indexListL)}
 
</Picker>

          <Picker
  selectedValue={this.state.LeftPower}
  style={{height: 50,width:150,fontSize:10,}}
  onValueChange={(itemValue) => this.onPickerValueChangePower(this.state.RightPower,itemValue,false)
  }>
{this.loadData(this.state.powerListL)}
</Picker>

  </View>
</View>
      </View>
    );
  }
}

export default Thickness;
