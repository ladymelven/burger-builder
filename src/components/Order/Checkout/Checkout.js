import React from "react";
import { Route, Redirect } from "react-router-dom";
import styles from "./Checkout.module.css";

import Modal from "../../../utilities/Modal/Modal";

import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";
import DeliveryForm from "../DeliveryForm/DeliveryForm";

import { connect } from "react-redux";

const Checkout = props => {
	const continueHandler = () => {
		props.history.push("checkout/delivery");
	};

	const cancelHandler = () => {
		props.history.replace("/build");
	};

	let checkoutEl = (
		<div className={styles.Checkout}>
			<CheckoutSummary
				clickedCancel={cancelHandler}
				clickedContinue={continueHandler}
			/>
			<Route path={props.match.url + "/delivery"} component={DeliveryForm} />
		</div>
	);

	if (props.error) {
		checkoutEl = <Modal show={props.error}>Failed to send order</Modal>;
	}

	if (props.orderSent) {
		checkoutEl = <Redirect to="/history" />;
	}

	return props.ingredients ? checkoutEl : <Redirect to="/build" />;
	//redirect to main unless user came from Builder page
};

const mapStateToProps = state => {
	return {
		ingredients: state.burger.ingredients,
		error: state.order.error,
		orderSent: state.order.orderSent
	};
};

export default connect(mapStateToProps)(Checkout);
