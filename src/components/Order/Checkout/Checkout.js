import React, {useState} from "react";
import {Route, Redirect} from "react-router-dom";
import styles from "./Checkout.module.css";

import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";
import DeliveryForm from "../DeliveryForm/DeliveryForm";

const Checkout = props => {
	const [ingredients] = useState(props.location.ingredients);
	const [price] = useState(props.location.price);

	const continueHandler = () => {
		props.history.push("checkout/delivery");
	};

	const cancelHandler = () => {
		props.history.replace("/build");
	};

	return (ingredients && price) ||
		(props.location.ingredients && props.location.price) ? (
		<div className={styles.Checkout}>
			<CheckoutSummary
				ingredients={ingredients}
				price={price}
				clickedCancel={cancelHandler}
				clickedContinue={continueHandler}
			/>
			<Route
				path={props.match.url + "/delivery"}
				render={() => <DeliveryForm ingredients={ingredients} price={price} />}
			/>
		</div>
	) : (
		<Redirect to="/build" /> //redirect unless user came from Builder page
	);
};

export default Checkout;
