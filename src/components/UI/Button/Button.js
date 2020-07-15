import React from "react";

import styles from "./Button.module.css";

const button = props => (
	<button
		type={props.btnType}
		onClick={props.clicked}
		className={styles.Button + " " + styles[props.type]}
		disabled={props.disabled}
	>
		{props.children}
	</button>
);

export default button;
