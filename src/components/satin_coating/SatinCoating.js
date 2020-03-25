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
  Dimensions
} from "react-native";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import StatusBarBackground from '../statusBar/StatusBarBackground';
import BackButton from '../backbtn/BackButton.component';
import DynamicBtn from '../dynamicButton/DynamicButton.component';
import ComparisonSlider from "../comparison_slider/ComparisonSlider";
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import WaterRepellant from '../../styles/images/lens/satin/hydrophobic.m4v';
import DirtRepellant from '../../styles/images/lens/satin/antistatic.m4v';
import Reflection from '../../styles/images/lens/satin/without-Anti-refelection.jpg';
import AntiReflection from '../../styles/images/lens/satin/with-Anti-refelection.jpg';
import  Coaching from '../../styles/images/lens/satin/coaching.jpg';
import  CoachingTop from '../../styles/images/lens/satin/coaching-top.png';
import  Smudge from '../../styles/images/lens/satin/smudge.jpg';
import  SmudgeTop from '../../styles/images/lens/satin/smudge_top.png';
import FringerPrint from '../../styles/images/lens/satin/fingerprint-new.png';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';


class SatinCoating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      btnList:[],
      video:DirtRepellant,
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      playerState: PLAYER_STATES.PLAYING,
      screenType: 'content',
      position:0,
      x: 0,
      y: 0,
      thumbprints: [],
    };
  }

 

  preventDragHandler = (e) => {
    e.preventDefault();
}

handlethree = () => {
    console.log("threee run")
}

twohandle = () => {
    console.log("twosend")
}

onehandle = () => {
    console.log("One run")
}

onMouseMove = (e) => {
  //  console.log(e.nativeEvent.locationX, e.nativeEvent.locationY, "Coordinates");
    let thumbprints = this.state.thumbprints;
    let obj = {
        x: e.nativeEvent.locationX,
        y: e.nativeEvent.locationY
    }
    thumbprints.push(obj);
    if (e.nativeEvent.locationX - 498 && e.nativeEvent.locationY - 233) {
        this.setState({ x: e.nativeEvent.locationX, y: e.nativeEvent.locationY, thumbprints });
    }
}
  componentDidMount = () => {
    this.setState({
      title: "Satin Coating",
      btnList:[
        {
            id:0,
            name: 'Scratch Resistance',
            isSelect:true,
         },
         {
            id:1,   
            name: 'Anti Reflection',
            isSelect:false,
          },
          {
             id:2,   
             name: 'Water Repellant',
             isSelect:false,
           },
           {
              id:3,   
              name: 'Smudge Repellant',
              isSelect:false,
            },
            {
               id:4,   
               name: 'Drit Repellant',
               isSelect:false,
             },
    ]
    });
  };
  btnPressed = item =>{
        
    switch (item.id) {
      case 0:
        this.setState({
          position:0,
        })
        break;

      case 1:
          this.setState({
        position:1,
      })
        
        break;
      case 2:
        this.setState({
          currentTime: 0,
          duration: 0,
          isFullScreen: false,
          isLoading: true,
          paused: false,
          playerState: PLAYER_STATES.PLAYING,
          video:WaterRepellant,
          position:2,
        })
        break;

      case 3:
        this.setState({
          position:3,
        })
        break;
      case 4:
        this.setState({
          currentTime: 0,
          duration: 0,
          isFullScreen: false,
          isLoading: true,
          paused: false,
          playerState: PLAYER_STATES.PLAYING,
          video:DirtRepellant,
          position:4,
        })
        break;

      default:
    }
}

renderItem =(data,navigation) =>{

  return   <DynamicBtn 
  key={data.index}
  data={data.item}
  navigation={navigation}
  btnPressed={this.btnPressed}
  list={this.state.btnList}/>
                           
  }

  reloadVideo =()=>{
    return(
      <View style={styles.videoContainer}>
      <Video
         onEnd={this.onEnd}
         onLoad={this.onLoad}
         onLoadStart={this.onLoadStart}
         onProgress={this.onProgress}
         paused={this.state.paused}
         ref={videoPlayer => (this.videoPlayer = videoPlayer)}
         resizeMode={this.state.screenType}
         onFullScreen={this.state.isFullScreen}
         source={this.state.video}
         style={styles.mediaPlayer}
         volume={10}
       />
       <MediaControls
         duration={this.state.duration}
         isLoading={this.state.isLoading}
         mainColor="#fff"
         onFullScreen={this.onFullScreen}
         onPaused={this.onPaused}
         onReplay={this.onReplay}
         onSeek={this.onSeek}
         onSeeking={this.onSeeking}
         playerState={this.state.playerState}
         progress={this.state.currentTime}
       />

      </View>
    )
  }
  onSeek = seek => {
    //Handler for change in seekbar
    this.videoPlayer.seek(seek);
  };

  onPaused = playerState => {
    //Handler for Video Pause
    this.setState({
      paused: !this.state.paused,
      playerState,
    });
  };

  onReplay = () => {
    //Handler for Replay
    this.setState({ playerState: PLAYER_STATES.PLAYING });
    this.videoPlayer.seek(0);
  };

  onProgress = data => {
    const { isLoading, playerState } = this.state;
    // Video Player will continue progress even if the video already ended
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      this.setState({ currentTime: data.currentTime });
    }
  };
  
  onLoad = data => this.setState({ duration: data.duration, isLoading: false });
  
  onLoadStart = data => this.setState({ isLoading: true });
  
  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });
  
  onError = () => alert('Oh! ', error);
  
  exitFullScreen = () => {
    alert('Exit full screen');
  };
  
  enterFullScreen = () => {};
  
  onFullScreen = () => {
    if (this.state.screenType == 'content')
      this.setState({ screenType: 'cover' });
    else this.setState({ screenType: 'content' });
  };

  onSeeking = currentTime => this.setState({ currentTime });

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.Container}>
      <StatusBarBackground style={{backgroundColor:'midnightblue'}}/>
   <BackButton navigation={navigation} data={this.state.title} visibility={false}/>
  
     <View style={{ flexDirection: "column", alignItems: "flex-start", marginLeft:40 }}>
     <FlatList 
         vertical={true}
 data={this.state.btnList}
 renderItem={item => this.renderItem(item,navigation)} 
 keyExtractor={item => item.id.toString()}
 extraData={this.state}
/>
    
     </View>
     <ScrollView vertical={true}>
     {this.state.position ==0 ? 
                (
                    <View style={styles.SignaturePad}>
                      <Image style={[StyleSheet.absoluteFillObject,styles.imgFluid]}  source={Coaching} resizeMode='contain'/>
                      <View style={styles.overlay} >

                   <Image style={[styles.overlayImageStyle]}  source={CoachingTop}  resizeMode='contain'/>
                   
                   <SketchCanvas style={[styles.overlayImageStyle,{ width: '50%', height: 200 ,flexDirection:'row',justifyContent:'center',alignSelf:'flex-end'}]}
                       strokeColor={'white'}
                       strokeWidth={1} >

                   </SketchCanvas>
                      </View>
                    
                         
                    </View>
                
                )
              :null}

     {this.state.position == 1 ? (

<View style={styles.imageContainer}>
              <ComparisonSlider
                imageWidth={Math.round(Dimensions.get("window").width) - 45}
                imageHeight={400}
                initialPosition={50}
                leftImage={Reflection}
                rightImage={AntiReflection}
              />
              </View>
            ) : null}
            {this.state.position == 2 ||this.state.position == 4 ? 
                (this.reloadVideo(this.state.video))
              :null}

          {this.state.position == 3 ? 
                ( <View style={styles.SignaturePad}>
                  <Image style={[StyleSheet.absoluteFillObject,styles.imgFluid]}  source={Smudge} resizeMode='contain'/>
                  <View style={styles.overlay} >
                                               
               <Image style={[styles.overlayImageStyle]}  source={SmudgeTop}  resizeMode='contain'/>
               <TouchableOpacity style={[styles.overlayImageStyle,{width: '50%', height: 200 ,flexDirection:'column',justifyContent:'center',alignSelf:'flex-end'}]} onPress={(evt)=>this.onMouseMove(evt)}>
                  {this.state.thumbprints && this.state.thumbprints.map((image, index) => 
                  <Image key={index} style={[styles.overlayImageStyle,
                  { marginLeft: image.x, marginTop: image.y,width:'30%',height:'30%'}]} 
                  source={FringerPrint} />)}

               </TouchableOpacity>
              
                  </View>
                
                     
                </View>
            )
              :null}

        </ScrollView>
      </View>
    );
  }
}

export default SatinCoating;
