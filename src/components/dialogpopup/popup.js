import React, { Component } from "react";
import styles from "./popup.module.css";
import { Animated } from "react-animated-css";
import PropTypes from "prop-types";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { show, text, inputs, disableButton } = this.props;
    disableButton = !disableButton;
    return (
      <Animated
        animationIn="bounceInDown"
        animationOut="bounceOutUp"
        animationInDelay={1500}
        isVisible={show}
        animateOnMount={false}
        className={styles.container}
      >
        <div className={styles.container}>
          {
            <div
              className={
                disableButton
                  ? styles.popupmodel
                  : [styles.popupmodel, styles.disable].join(" ")
              }
            >
              <div className={styles.text}>{text}</div>
              {disableButton && (
                <div className={styles.buttonContainer}>
                  <button
                    className={styles.button}
                    value="true"
                    onClick={e => {
                      return inputs(e);
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className={styles.button}
                    value="false"
                    onClick={e => {
                      return inputs(e);
                    }}
                  >
                    No
                  </button>
                </div>
              )}
            </div>
          }
        </div>
      </Animated>
    );
  }
}

Popup.propTypes = {
  disableButton: PropTypes.bool.isRequired
};

Popup.defaultProps = {
  disableButton: false
};

export default Popup;
