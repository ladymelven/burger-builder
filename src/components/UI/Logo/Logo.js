import React from "react";

import styles from "./Logo.module.css";
// import logoPath from "../../../assets/images/burger-logo.png";

const logo = () => (
  <div className={styles.logoContainer}>
    <span role="img" aria-label="hamburger" className={styles.burger}>
      🍔
    </span>
  </div>
);

export default logo;

// <img src={logoPath} alt="Burger Builder Logo" className={styles.logo} />
