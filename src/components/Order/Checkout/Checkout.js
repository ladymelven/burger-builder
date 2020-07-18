import React from "react";
import { Route, Redirect } from "react-router-dom";
import styles from "./Checkout.module.css";

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

	return props.ingredients ? (
		<div className={styles.Checkout}>
			<CheckoutSummary
				clickedCancel={cancelHandler}
				clickedContinue={continueHandler}
			/>
			<Route path={props.match.url + "/delivery"} component={DeliveryForm} />
		</div>
	) : (
		<Redirect to="/build" /> //redirect unless user came from Builder page
	);
};

const mapStateToProps = state => {
	return {
		ingredients: state.ingredients
	};
};

export default connect(mapStateToProps)(Checkout);
