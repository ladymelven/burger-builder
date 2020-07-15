import React from "react";

import styles from "./Controls.module.css";
import ControlBar from "./ControlBar/ControlBar";

const controls = props => {
  const labels = [
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" },
    { label: "Veggies", type: "salad" },
    { label: "Bacon", type: "bacon" }
  ];
  return (
    <div className={styles.controlsContainer}>
      <h3 className={styles.controlsHeading}>Add ingredients to your burger</h3>
      {labels.map(element => (
        <ControlBar
          key={element.label}
          label={element.label}
          add={() => props.addIngr(element.type)}
          remove={() => props.removeIngr(element.type)}
          disabled={props.disableBtn[element.type]}
        />
      ))}
    </div>
  );
};

export default controls;
