import React from "react";

import styles from "./NavigationList.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationList = props => (
	<ul className={styles.navList}>
		<NavigationItem path="/build" clicked={props.clickLink}>
			Build Burger
		</NavigationItem>
		<NavigationItem path="/history" clicked={props.clickLink}>
			My Orders
		</NavigationItem>
		{/*<NavigationItem path='/'>Order History</NavigationItem>*/}
	</ul>
);

export default navigationList;
