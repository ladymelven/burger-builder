import React from "react";

import styles from "./CheckoutSummary.module.css";
import BurgerPreview from "../../Burger/BurgerPreview/BurgerPreview";
import Button from "../../UI/Button/Button";

import { connect } from "react-redux";

const orderSummary = props => {
	return (
		<div className={styles.checkoutSummary}>
			<h2 className={styles.sumHeading}>Your order</h2>
			<BurgerPreview
				ingredients={props.ingredients}
				placeholder="Empty burger =("
			/>
			<p className={styles.sumPrice}>
				Total price is <strong>{props.price.toFixed(2)}$</strong>
			</p>
			<Button type="checkoutBtn" clicked={props.clickedContinue}>
				Continue
			</Button>
			<Button type="cancelBtn" clicked={props.clickedCancel}>
				Clear order
			</Button>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		ingredients: state.burger.ingredients,
		price: state.burger.price
	};
};

export default connect(mapStateToProps)(orderSummary);
