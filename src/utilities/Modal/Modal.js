import React from "react";

import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => (
  <React.Fragment>
    <Backdrop show={props.show} clickBackdrop={props.clickBackdrop}></Backdrop>
    <div
      className={props.show ? styles.modal + " " + styles.show : styles.modal}
    >
      {props.children}
    </div>
  </React.Fragment>
);

export default React.memo(modal);
