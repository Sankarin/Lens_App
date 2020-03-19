import React, { Component } from "react";
import styles from "./placeholder.module.css";
class PlaceholderCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {
      _id,
      imageSrc,
      placeHolderIndex,
      isPlaceholder,
      number,
      buttonAction,
      sent,
      imageObj,
      imgIndex,
      isBeingRetaken,
      isAlreadySelected,
      retakeGlassObj
    } = this.props;
    return (
      <>
        {isPlaceholder ? (
          <div className={styles.placeholderMainCard}>
            <h3 className={styles.title}>
              {retakeGlassObj[imageObj["_id"]]
                ? `Retake Glass ${number}`
                : `Glass ${number}`}
            </h3>
            <div className={styles.main}>
              <div className={styles.placeholder} />
              <img
                src={require("../../styles/images/placeholderPerson.png")}
                className={styles.person}
                alt="person"
              />
              <div className={styles.base} />
            </div>
          </div>
        ) : (
          <div
            className={
              !isBeingRetaken && !isAlreadySelected[imageObj["_id"]]
                ? "container"
                : isAlreadySelected[imageObj["_id"]] || sent
                ? "selectedContainer"
                : "hiddenContainer"
            }
          >
            <img className="image" src={imageSrc} alt={_id} />
            <div
              className={
                !isBeingRetaken && !isAlreadySelected[imageObj["_id"]]
                  ? "middle"
                  : isAlreadySelected[imageObj["_id"]] && !sent
                  ? "middleSelected"
                  : !isBeingRetaken && sent
                  ? "middleSelected"
                  : "middleHidden"
              }
            >
              <div
                onClick={e =>
                  !isBeingRetaken && !isAlreadySelected[imageObj["_id"]]
                    ? buttonAction(e, imageObj, imgIndex, "RETAKE")
                    : isAlreadySelected[imageObj["_id"]] && !sent
                    ? buttonAction(e, imageObj, imgIndex, "UNCHECK")
                    : sent
                    ? buttonAction(e, imageObj, imgIndex, "RETAKE")
                    : console.log("Not Allowed")
                }
                className={
                  !isBeingRetaken && !isAlreadySelected[imageObj["_id"]]
                    ? "text"
                    : !isBeingRetaken &&
                      isAlreadySelected[imageObj["_id"]] &&
                      !sent
                    ? "unselectText"
                    : !isBeingRetaken && sent
                    ? "sentText"
                    : "hiddenText"
                }
              >
                {isAlreadySelected[imageObj["_id"]] && !sent
                  ? "De-Select"
                  : "Retake"}
              </div>

              {isAlreadySelected[imageObj["_id"]] ? (
                <div className={isBeingRetaken ? "hiddenText" : "selectedText"}>
                  {!sent ? (
                    <i class="fas fa-check" aria-hidden="true"></i>
                  ) : (
                    <i class="fas fa-check-double"></i>
                  )}
                </div>
              ) : (
                <div
                  onClick={e =>
                    !isBeingRetaken
                      ? buttonAction(e, imageObj, imgIndex, "SELECT")
                      : console.log("isBeingReTaken")
                  }
                  className={!isBeingRetaken ? "text" : "hiddenText"}
                >
                  Select
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default PlaceholderCard;
