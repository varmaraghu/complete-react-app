import React from "react";

import classes from "./Backdrop.module.css";

const Backdrop = (props) =>
  props.enable ? (
    <div className={classes.Backdrop} onClick={props.disable}></div>
  ) : null;

export default Backdrop;
