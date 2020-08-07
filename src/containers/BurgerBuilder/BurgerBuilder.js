import React from "react";
import axOrder from "../../ajax/axios-orders";

import BurgerPreview from "../../components/Burger/BurgerPreview/BurgerPreview";
import Controls from "../../components/Burger/Controls/Controls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

import withErrorHandling from "../../utilities/withErrorHandling/withErrorHandling";
import Modal from "../../utilities/Modal/Modal";

import OrderModule from "../../components/UI/OrderModule/OrderModule";
import Spinner from "../../components/UI/Spinner/Spinner";

import { connect } from "react-redux";
import { add, remove, init } from "../../store/actions/burger.js";
import { orderInprogress } from "../../store/actions/order.js";

class BurgerBuilder extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checkingOut: false
		};
	}

	componentDidMount() {
		this.props.initIngredients();
	}

	getSnapshotBeforeUpdate() {
		return document.body.offsetHeight;
	} //preview size changes with every new component

	componentDidUpdate(prevProps, prevState, prevHeight) {
		const sizeChange = document.body.offsetHeight - prevHeight;
		window.scrollBy({ top: sizeChange, left: 0 });
	} //scroll back to controls

	checkOutHandler = () => {
		this.setState({ checkingOut: !this.state.checkingOut });
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
		this.props.history.push("/checkout");
		this.props.orderInprogress();
	}; //move to Checkout page

	render() {
		const disabledInfo = { ...this.props.ingredients };
		for (const key in disabledInfo) {
			disabledInfo[key] = !disabledInfo[key];
		} //if there are no ingredients to remove, we want to disable "-" button
		let burger = (
			<React.Fragment>
				{" "}
				<BurgerPreview
					ingredients={this.props.ingredients}
					placeholder="Add something to your burger!"
				/>{" "}
				<Controls
					addIngr={this.props.onAdd}
					removeIngr={this.props.onRemove}
					disableBtn={disabledInfo}
				/>{" "}
			</React.Fragment>
		);

		let order = (
			<OrderModule price={this.props.price} checkOut={this.checkOutHandler} />
		);
		if (!this.props.ingredients) {
			burger = <Spinner />;
			order = <Spinner />;
		} //show spinner while fetching burger from backend

		if (this.props.error) {
			burger = (
				<Modal show={this.props.error}>
					Could not load ingredients! Please check your network connection.
				</Modal>
			);
			order = null;
		}

		let orderSummary = (
			<OrderSummary
				isCheckingOut={this.state.checkingOut}
				ingredients={this.props.ingredients}
				price={this.props.price}
				clicked={this.checkOutHandler}
				cancelOrder={this.clearOrderHandler}
				sendOrder={this.purchaseHandler}
			/>
		);
		if (this.state.loading) {
			orderSummary = (
				<Modal show={this.state.loading}>
					{" "}
					<Spinner />{" "}
				</Modal>
			);
		} else if (!this.props.ingredients) {
			orderSummary = null;
		}

		return (
			<React.Fragment>
				{burger} {order} {orderSummary}
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		ingredients: state.burger.ingredients,
		price: state.burger.price,
		error: state.burger.hasError
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAdd: ingredient => dispatch(add(ingredient)),
		onRemove: ingredient => dispatch(remove(ingredient)),
		initIngredients: () => dispatch(init()),
		orderInprogress: () => dispatch(orderInprogress())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandling(BurgerBuilder, axOrder));
