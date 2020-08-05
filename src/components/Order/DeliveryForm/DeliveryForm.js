import React from "react";

import Form from "../../Form/Form";
import Spinner from "../../UI/Spinner/Spinner";
import isValidPhone from "../../../utilities/Validation/isValidPhone/isValidPhone";
import { withRouter } from "react-router-dom";
import { attemptPurchase } from "../../../store/actions/order";

import { connect } from "react-redux";

class DeliveryForm extends React.Component {
	state = {
		name: "",
		addressStr: "",
		addressHouse: 0,
		addressApart: 0,
		phone: 0,
		delivery: "",
		comment: "",
		formIsValid: true
	};

	changeHandler = event => {
		const formData = { ...this.state };
		formData[event.target.name] = event.target.value.toString(10);
		this.setState({ ...formData });
		if (event.target.name === "phone") {
			if (isValidPhone(event.target.value)) {
				this.formConfig[1].config.valid = true;
				this.setState({ formIsValid: true });
			} else {
				this.formConfig[1].config.valid = false;
				this.setState({ formIsValid: false });
			}
		}
	};

	submitOrderHandler = event => {
		event.preventDefault();
		if (!this.state.formIsValid) {
			return;
		}

		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: this.state.name,
				address: {
					street: this.state.addressStr,
					houseNo: this.state.addressHouse,
					apartment: this.state.addressApart
				},
				phone: this.state.phone
			},
			deliveryTime: this.state.delivery,
			comments: this.state.comment
		};

		this.props.onPurchase(order);
	};

	formConfig = [
		{
			name: "name",
			type: "text",
			label: "Your name",
			config: {
				placeholder: "Minnie Mouse",
				required: true
			}
		},
		{
			name: "phone",
			type: "tel",
			label: "Contact phone",
			config: {
				placeholder: "+7 000 000 0000",
				required: true,
				valid: true
			}
		},
		{
			name: "delivery",
			type: "datalist",
			label: "Delivery time",
			config: {
				listName: "delivery-methods",
				options: ["Soonest"]
			}
		},
		{
			name: "addressStr",
			type: "text",
			label: "Delivery address",
			config: {
				placeholder: "Burger street",
				required: true
			}
		},
		{
			name: "addressHouse",
			type: "text",
			config: {
				placeholder: "25",
				required: true
			}
		},
		{
			name: "addressApart",
			type: "text",
			config: {
				placeholder: "Apartment/office"
			}
		},
		{ name: "comment", type: "textarea", label: "Comments", config: {} }
	];

	render() {
		return this.props.loading ? (
			<Spinner />
		) : (
			<Form
				heading="Where do we deliver your burger?"
				action="Order"
				inputs={this.formConfig}
				change={this.changeHandler}
				submit={this.submitOrderHandler}
				invalid={!this.formIsValid}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		ingredients: state.burger.ingredients,
		price: state.burger.price,
		loading: state.order.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onPurchase: order => dispatch(attemptPurchase(order))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(DeliveryForm));
