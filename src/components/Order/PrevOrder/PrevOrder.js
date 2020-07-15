import React from "react";

import styles from "./PrevOrder.module.css";

const PrevOrder = props => (
	<div className={styles.orderContainer}>
		<p className={styles.orderAddress}>{props.address}</p>
		<p>
			<span role="img" aria-label="hamburger">
				🍔
			</span>
			({props.meat}
			<span role="img" aria-label="patty">
				🍖
			</span>
			, {props.cheese}
			<span role="img" aria-label="cheese">
				🧀
			</span>
			, {props.salad}
			<span role="img" aria-label="veggies">
				🥬
			</span>
			, {props.bacon}
			<span role="img" aria-label="bacon">
				🥓
			</span>
			)
		</p>
		<p className={styles.orderPrice}>{props.price.toFixed(2)}$</p>
	</div>
);

export default PrevOrder;
