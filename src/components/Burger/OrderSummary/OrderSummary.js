import React from "react";

import styles from "./OrderSummary.module.css";
import Modal from "../../../utilities/Modal/Modal";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
	const ingrInfo = [
		{type: "meat", label: "patties", emoji: "🍖"},
		{type: "cheese", label: "slices of cheese", emoji: "🧀"},
		{type: "salad", label: "portions of veggies", emoji: "🥬"},
		{type: "bacon", label: "strips of bacon", emoji: "🥓"}
	];

	let summary = ingrInfo.map(element => {
		if (props.ingredients[element.type]) {
			return ((
				<li key={element.type}>
					<span role="img" aria-label={element.type}>
						{element.emoji}
					</span>{" "}
					{props.ingredients[element.type]} {element.label}
				</li>
			): null);
		} else {
			return null;
		}
	});

	if (summary.every(el => el === null)) {
		summary = <p>...basically, just bread. Maybe add some filling?</p>;
	}

	return (
		<Modal show={props.isCheckingOut} clickBackdrop={props.clicked}>
			<div className={styles.closeIcon} onClick={props.clicked}>
				&times;
			</div>
			<h3 className={styles.orderHeading}>Your order</h3>
			<p className={styles.caption}>A delicious burger with</p>
			<ul className={styles.orderList}>{summary}</ul>
			<p className={styles.totalPrice}>
				Total price: {props.price.toFixed(2)}$
			</p>
			<div className={styles.btnContainer}>
				<Button type="checkoutBtn" clicked={props.sendOrder}>
					Checkout
				</Button>
				<Button type="cancelBtn" clicked={props.cancelOrder}>
					CANCEL
				</Button>
			</div>
		</Modal>
	);
};

export default OrderSummary;
