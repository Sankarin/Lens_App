import React, { useState } from "react";
import Webcam from "react-webcam";
import styles from "./webcam.module.css";
import { StoreProvider } from "../../store";
import _ from "lodash";
import PlaceholderCard from "../PlaceholderCard/PlaceholderCard";
import { toast } from "../toast/toast";
import Reward from "react-rewards";
import { smartMirrorWhatsaapHandler } from "../../utilities/updateUtility";
const uuidv1 = require("uuid/v1");
let log = console.log;
let group = console.group;
let groupEnd = console.groupEnd;
const WebcamCapture = props => {
  let { disable } = props;
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    props.getImage(webcamRef.current.getScreenshot());
  }, [webcamRef]);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Webcam
          className="webcamClass"
          audio={false}
          ref={webcamRef}
          mirrored={true}
          width="590"
          height="890"
          screenshotFormat="image/jpeg"
        />
        <button
          onClick={capture}
          className={
            !disable
              ? `${styles.refreshButton} ${styles.capture}`
              : `${styles.disabledSnapButton} ${styles.capture}`
          }
        >
          <i className="fas fa-camera"></i>
          <span>&nbsp;Snap</span>
        </button>
      </div>
    </>
  );
};
class WebcamComponent extends React.Component {
  constructor(props) {
    super(props);
    this.appstore = StoreProvider.createStore("Snap", { disableButton: false });
    this.state = {
      images: [],
      placeholderReferenceMap: [],
      placeholderLocations: [],
      modalIsOpen: false,
      sendToWhatsaap: false,
      imageInfo: {},
      sent: false,
      isBeingRetaken: false,
      whatsaapNumber: "",
      isAlreadySelected: {},
      retakeGlassObj: {},
      numberIsCorrect: false,
      retakeIndex: -1,
      disableSnap: false,
      userName: ""
    };
  }
  componentDidMount() {
    this.initPlaceholderImages();
  }
  initPlaceholderImages = () => {
    let images = this.state.images;
    //Take Images from Constants and Add to Empty Array
    [1, 2, 3, 4, 5, 6].map((img, index) => {
      let imageObj = {
        _id: uuidv1(),
        imageSrc: img,
        placeHolderIndex: index,
        sent: false,
        isPlaceholder: true
      };
      images.push(imageObj);
    });
    this.setState({ images }, () => this.generatePlaceholderRefMap());
  };

  generatePlaceholderRefMap = () => {
    let images = this.state.images;
    let placeholderImages = images.map(image => {
      if (image.isPlaceholder) {
        return image.placeHolderIndex;
      } else {
        return -1;
      }
    });
    let placeholderLocations = placeholderImages.filter(img => img !== -1);
    log("PLACEHOLDER REF", placeholderLocations);
    this.setState({
      placeholderReferenceMap: placeholderImages,
      placeholderLocations
    });
  };

  getImage = img => {
    let {
      images,
      placeholderReferenceMap,
      placeholderLocations,
      isBeingRetaken,
      retakeGlassObj,
      retakeIndex
    } = this.state;
    let imageObj = {
      _id: uuidv1(),
      imageSrc: img,
      isPlaceholder: false,
      sent: false,
      placeHolderIndex: -1
    };
    if (placeholderLocations.length === 0) {
      this.setState({ disableSnap: true }, () => {
        this.appstore.update("disableButton", true);
      });
      toast.warn({
        text: "Snap Limit Reached"
      });
      return;
    } else {
      images.splice(placeholderLocations[0], 1, imageObj);
    }
    if (isBeingRetaken) {
      isBeingRetaken = false;
    }
    if (Object.keys(retakeGlassObj).length > 0) {
      retakeGlassObj = {};
      retakeIndex = -1;
    }

    this.setState({ images, isBeingRetaken, retakeIndex, retakeGlassObj }, () =>
      this.generatePlaceholderRefMap()
    );
  };
  buttonAction = (e, imageObj, imgIndex, action) => {
    let images = this.state.images;
    let isAlreadySelected = this.state.isAlreadySelected;
    let retakeGlassObj = this.state.retakeGlassObj;
    if (action === "RETAKE") {
      let retakeImageSelected = images[imgIndex];
      retakeGlassObj[imageObj["_id"]] = imgIndex;
      retakeImageSelected.imageSrc = imgIndex;
      retakeImageSelected.isPlaceholder = true;
      retakeImageSelected.placeHolderIndex = imgIndex;
      images.splice(imgIndex, 1, retakeImageSelected);
      let di = this.appstore.get("disableButton");
      this.appstore.update(di, false);
      this.setState(
        {
          images,
          isBeingRetaken: true,
          retakeGlassObj,
          retakeIndex: imgIndex,
          disableSnap: false
        },
        () => this.generatePlaceholderRefMap()
      );
    }
    if (action === "SELECT") {
      if (imageObj["_id"] in isAlreadySelected == false) {
        let obj = { index: imgIndex, imageObj: imageObj };
        isAlreadySelected[imageObj["_id"]] = obj;
      }
      this.setState({
        imageInfo: { info: imageObj, index: imgIndex, isAlreadySelected }
      });
    }
    if (action === "UNCHECK") {
      delete isAlreadySelected[imageObj["_id"]];
      this.setState({
        imageInfo: { info: imageObj, index: imgIndex, isAlreadySelected }
      });
    }
  };
  generateImageGrid = () => {
    let { images, isAlreadySelected, retakeGlassObj } = this.state;
    return (
      <div className="realMirrorImages">
        {images.map((imageObj, imgIndex) => (
          <PlaceholderCard
            isBeingRetaken={this.state.isBeingRetaken}
            number={imgIndex + 1}
            isPlaceholder={imageObj.isPlaceholder}
            imageSrc={imageObj.imageSrc}
            imgIndex={imgIndex}
            sent={imageObj.sent}
            imageObj={imageObj}
            retakeGlassObj={retakeGlassObj}
            isAlreadySelected={isAlreadySelected}
            buttonAction={this.buttonAction}
          />
        ))}
      </div>
    );
  };
  openSelectModal = () => {
    this.setState({ modalIsOpen: true });
  };
  sendToWhatsaap(imageSrc, name, number, tokenDetails) {
    let isAlreadySelected = this.state.isAlreadySelected;
    let images = this.state.images;
    let items = Object.keys(isAlreadySelected);
    items.map(key => {
      let value = isAlreadySelected[key];
      let index = isAlreadySelected[key]["index"];
      images[index].sent = true;
      console.log(
        "%cMAPPED INDEX ==>",
        "color:salmon; background-color:black; padding:20px; font-size:10px;",
        index
      );
    });
    group("BACK TO REAL MIRROR");
    log("isAlreadySelected", isAlreadySelected);
    log("Images Array", images);
    groupEnd();
    let s = smartMirrorWhatsaapHandler(imageSrc, name, number, tokenDetails);
    if (s) {
      this.setState({ sent: true, images }, () => this.startReward());
    }
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  backToRealMirror() {
    this.setState({
      sent: false,
      modalIsOpen: false,
      whatsaapNumber: "",
      retakeGlassObj: {},
      userName: "",
      numberIsCorrect: false,
      disableSnap: false,
      retakeIndex: -1
    });
    /* let isAlreadySelected = this.state.isAlreadySelected;
    let images = this.state.images;
    Object.values(isAlreadySelected).map(img => {
      let imageSelected = images[img.index];
      imageSelected.imageSrc = img.index;
      imageSelected.isPlaceholder = true;
      imageSelected.placeHolderIndex = img.index;
      images.splice(img.index, 1, imageSelected);
    });
    //SOrt all Images to Top
    let sorted = _.sortBy(images, [
      image => {
        return image.isPlaceholder;
      }
    ]);
    //Reset Placeholder Indexes to Correct Placeholder
    sorted.map((item, index) => {
      if (item.isPlaceholder) {
        item.placeHolderIndex = index;
      }
    });
    this.setState(
      {
        sent: false,
        modalIsOpen: false,
        whatsaapNumber: "",
        userName: "",
        numberIsCorrect: false,
        disableSnap: false,
        retakeIndex: -1,
        images: sorted,
        isAlreadySelected: {}
      },
      () => this.generatePlaceholderRefMap()
    ); */
  }
  startReward() {
    setTimeout(() => {
      this.reward.rewardMe();
    }, 100);
  }
  whatsaapNumberHandler(e) {
    let re = /^[0-9]{10}$/;
    let isCorrect = re.test(e.target.value);
    this.setState({
      whatsaapNumber: e.target.value,
      numberIsCorrect: isCorrect
    });
  }
  refreshAllImages = () => {
    this.setState(
      {
        images: [],
        placeholderReferenceMap: [],
        placeholderLocations: [],
        modalIsOpen: false,
        sendToWhatsaap: false,
        imageInfo: {},
        sent: false,
        isBeingRetaken: false,
        whatsaapNumber: "",
        userName: "",
        isAlreadySelected: {},
        retakeGlassObj: {},
        numberIsCorrect: false,
        retakeIndex: 0,
        disableSnap: false
      },
      () => this.initPlaceholderImages()
    );
  };
  limitKeypress = e => {
    if (
      e.target.value !== undefined &&
      e.target.value.toString().length >= 10
    ) {
      e.preventDefault();
    }
  };
  userNameHandler = e => {
    e.preventDefault();
    this.setState({ userName: e.target.value });
  };
  render() {
    let {
      generateImageGrid,
      refreshAllImages,
      openSelectModal,
      state: {
        imageInfo,
        modalIsOpen,
        sent,
        whatsaapNumber,
        numberIsCorrect,
        isAlreadySelected,
        retakeGlassObj,
        retakeIndex,
        isBeingRetaken,
        images,
        userName
      }
    } = this;
    return (
      <>
        {!isBeingRetaken && !sent && (
          <>
            <button
              onClick={() =>
                Object.keys(isAlreadySelected).length === 0
                  ? log("Not Allowed")
                  : openSelectModal()
              }
              className={
                Object.keys(isAlreadySelected).length === 0
                  ? `${styles.hide}`
                  : `${styles.sendAllButton}`
              }
            >
              {" "}
              Send
            </button>

            <button
              onClick={() => refreshAllImages()}
              className={styles.refreshAll}
            >
              <i class="fas fa-sync-alt"></i>&nbsp;Refresh
            </button>
          </>
        )}
        {sent ? (
          <div className={styles.sentText}>
            <div className={styles.confettiReward}>
              <Reward
                config={{
                  angle: 90,
                  decay: 0.91,
                  spread: 95,
                  startVelocity: 65,
                  elementCount: 190,
                  elementSize: 10,
                  lifetime: 100,
                  zIndex: 10,
                  springAnimation: true
                }}
                ref={ref => {
                  this.reward = ref;
                }}
                type="confetti"
              ></Reward>
            </div>
            <p>You look Amazing. Thank You for Shopping with Us</p>
            <button
              onClick={() => this.backToRealMirror()}
              className={styles.rewardButton}
            >
              Thanks Great
            </button>
          </div>
        ) : (
          <>
            {Object.keys(retakeGlassObj).length > 0 && (
              <div className={styles.webcamTextOverlay}>
                <h2>Retake Glass {retakeIndex + 1} </h2>
              </div>
            )}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "0.8fr 1fr"
              }}
            >
              <WebcamCapture
                disable={this.state.disableSnap}
                getImage={img => this.getImage(img)}
              />
              {generateImageGrid()}
              {modalIsOpen && (
                <div className="modal">
                  <div className="modalContent">
                    <span onClick={() => this.closeModal()} className="close">
                      &times;
                    </span>
                    <div className={styles.multiImageDisplay}>
                      {this.state.isAlreadySelected &&
                        Object.values(
                          this.state.isAlreadySelected
                        ).map(image => (
                          <img
                            src={image["imageObj"].imageSrc}
                            alt="imageSrc"
                            className="modalImage"
                          />
                        ))}
                    </div>
                    {
                      <div className={styles.whatsaapInputForm}>
                        <input
                          className={styles.input}
                          type="text"
                          value={userName}
                          onChange={e => this.userNameHandler(e)}
                          placeholder="Enter Your Name"
                        />
                        <input
                          className={styles.input}
                          type="number"
                          value={whatsaapNumber}
                          min={1}
                          max={5}
                          onKeyPress={event => this.limitKeypress(event)}
                          onChange={e => this.whatsaapNumberHandler(e)}
                          placeholder="Enter Number Here"
                        />
                        <button
                          className={
                            numberIsCorrect
                              ? styles.whatsaapButton
                              : styles.errorButton
                          }
                          onClick={() =>
                            numberIsCorrect
                              ? this.sendToWhatsaap(
                                  Object.values(this.state.isAlreadySelected),
                                  userName,
                                  whatsaapNumber,
                                  this.props.tokenDetails
                                )
                              : undefined
                          }
                        >
                          <span>
                            <img
                              src={require("../../styles/images/whatsaap.png")}
                              alt="whatsaap"
                            />
                          </span>
                          Send To Whatsapp
                        </button>
                      </div>
                    }
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </>
    );
  }
}

export default WebcamComponent;
