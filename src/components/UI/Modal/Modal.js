import React from "react";

import classes from "./Modal.module.css";
import Auxiliary from "../../../hoc/Auxiliary";
import Backdrop from "../BackDrop/Backdrop";

const Modal = (props) => (
  <Auxiliary>
    <Backdrop enable={props.show} disable={props.hideModal} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Auxiliary>
);

export default Modal;
