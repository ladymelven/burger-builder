import React from "react";

import styles from "./OrderModule.module.css";
import Button from "../Button/Button";

const checkout = props => (
  <div className={styles.checkoutContainer}>
    <p className={styles.priceTag}>
      Your burger price is {props.price.toFixed(2)}$
    </p>
    <Button type="orderBtn" clicked={props.checkOut}>
      ORDER
    </Button>
  </div>
);

export default checkout;
