import React from "react";
import {Redirect} from "react-router-dom";
import axOrder from "../../ajax/axios-orders";
import axios from "axios";

import BurgerPreview from "../../components/Burger/BurgerPreview/BurgerPreview";
import Controls from "../../components/Burger/Controls/Controls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

import withErrorHandling from "../../utilities/withErrorHandling/withErrorHandling";
import Modal from "../../utilities/Modal/Modal";

import OrderModule from "../../components/UI/OrderModule/OrderModule";
import Spinner from "../../components/UI/Spinner/Spinner";

const PRICES = {
	bacon: 0.6,
	salad: 0.4,
	cheese: 0.8,
	meat: 1.2
};

class BurgerBuilder extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ingredients: null,
			totalPrice: 2,
			checkingOut: false,
			buying: false
		};
	}

	componentDidMount() {
		axios
			.get("https://burger-builder-cdf0a.firebaseio.com/ingredients.json")
			.then(response => {
				this.setState({
					ingredients: {
						bacon: response.data.bacon,
						salad: response.data.salad,
						cheese: response.data.cheese,
						meat: response.data.meat
					}
				});
			});
	}

	getSnapshotBeforeUpdate() {
		return document.body.offsetHeight;
	} //preview size changes with every new component

	componentDidUpdate(prevProps, prevState, prevHeight) {
		const sizeChange = document.body.offsetHeight - prevHeight;
		window.scrollBy(sizeChange, 0);
	} //scroll back to controls

	addIngredientHandler = ingredient => {
		const ingrs = JSON.parse(JSON.stringify(this.state.ingredients));
		ingrs[ingredient] += 1;
		let newPrice = this.state.totalPrice + PRICES[ingredient];
		this.setState({ingredients: ingrs, totalPrice: newPrice});
	};

	removeIngredientHandler = ingredient => {
		const ingrs = JSON.parse(JSON.stringify(this.state.ingredients));
		if (ingrs[ingredient] < 1) {
			return;
		}
		ingrs[ingredient] -= 1;
		let newPrice = this.state.totalPrice - PRICES[ingredient];
		this.setState({ingredients: ingrs, totalPrice: newPrice});
	};

	checkOutHandler = () => {
		this.setState({checkingOut: !this.state.checkingOut});
	}; // essentially toggles OrderSummary module

	clearOrderHandler = () => {
		this.setState({
			ingredients: {
				bacon: 0,
				salad: 0,
				cheese: 0,
				meat: 0
			},
			totalPrice: 2,
			checkingOut: false,
			loading: false
		});
	};

	purchaseHandler = () => {
		this.setState({buying: true});
	}; //move to Checkout page

	render() {
		const disabledInfo = {...this.state.ingredients};
		for (const key in disabledInfo) {
			disabledInfo[key] = !disabledInfo[key];
		} //if there is no ingredients to remove, we want to disable "-" button

		let burger = (
			<React.Fragment>
				<BurgerPreview
					ingredients={this.state.ingredients}
					placeholder="Add something to your burger!"
				/>
				<Controls
					addIngr={this.addIngredientHandler}
					removeIngr={this.removeIngredientHandler}
					disableBtn={disabledInfo}
				/>
			</React.Fragment>
		);

		let order = (
			<OrderModule
				price={this.state.totalPrice}
				checkOut={this.checkOutHandler}
			/>
		);

		if (!this.state.ingredients) {
			burger = <Spinner />;
			order = <Spinner />;
		} //show spinner while fetching burger from backend

		let orderSummary = (
			<OrderSummary
				isCheckingOut={this.state.checkingOut}
				ingredients={this.state.ingredients}
				price={this.state.totalPrice}
				clicked={this.checkOutHandler}
				cancelOrder={this.clearOrderHandler}
				sendOrder={this.purchaseHandler}
			/>
		);

		if (this.state.loading) {
			orderSummary = (
				<Modal show={this.state.loading}>
					<Spinner />
				</Modal>
			);
		} else if (!this.state.ingredients) {
			orderSummary = null;
		}

		return this.state.buying ? (
			<Redirect
				to={{
					pathname: "/checkout",
					ingredients: this.state.ingredients,
					price: this.state.totalPrice
				}}
			/>
		) : (
			<React.Fragment>
				{burger}
				{order}
				{orderSummary}
			</React.Fragment>
		);
	}
}

export default withErrorHandling(BurgerBuilder, axOrder);
