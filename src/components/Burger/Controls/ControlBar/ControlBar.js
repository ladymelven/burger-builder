import React from "react";

import Button from "../../../UI/Button/Button";
import styles from "./ControlBar.module.css";

const control = props => (
  <div className={styles.controlBar}>
    {props.label}
    <div className={styles.btnContainer}>
      <Button type="ctrlBtn" clicked={props.remove} disabled={props.disabled}>
        &ndash;
      </Button>
      <Button type="ctrlBtn" clicked={props.add}>
        +
      </Button>
    </div>
  </div>
);

export default control;
