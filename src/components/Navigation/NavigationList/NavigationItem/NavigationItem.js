import React from "react";
import {NavLink} from "react-router-dom";

import styles from "./NavigationItem.module.css";

const navigationItem = props => {
	const itemClasses = props.active
		? `${styles.navItem} ${styles.navActive}`
		: styles.navItem;
	return (
		<li className={itemClasses} onClick={props.clicked}>
			<NavLink to={props.path} className={styles.navLink}>
				{props.children}
			</NavLink>
		</li>
	);
};

export default navigationItem;
