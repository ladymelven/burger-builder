import React from "react";

import styles from "./Dropdown.module.css";
import Logo from "../../UI/Logo/Logo";
import Backdrop from "../../../utilities/Backdrop/Backdrop";
import NavigationList from "../NavigationList/NavigationList";

const dropdown = props => {
  const classes =
    styles.Dropdown + " " + (props.show ? styles.show : styles.closed);
  return (
    <React.Fragment>
      <Backdrop show={props.show} clickBackdrop={props.toggle}></Backdrop>
      <div className={classes}>
        <div className={styles.closeDropdown} onClick={props.toggle}>
          &times;
        </div>
        <Logo />
        <NavigationList clickLink={props.toggle} />
      </div>
    </React.Fragment>
  );
};

export default dropdown;
