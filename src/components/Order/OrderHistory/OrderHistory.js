import React from "react";

import styles from "./OrderHistory.module.css";
import PrevOrder from "../PrevOrder/PrevOrder";
import Spinner from "../../UI/Spinner/Spinner";
import Modal from "../../../utilities/Modal/Modal";
// import withErrorHandling from "../../../utilities/withErrorHandling/withErrorHandling";

import { connect } from "react-redux";
import { fetchOrders } from "../../../store/actions/order";

class OrderHistory extends React.Component {
	componentDidMount() {
		this.props.onFetchOrders();
	}

	render() {
		let orders;
		if (this.props.loading) {
			orders = <Spinner />;
		} else if (this.props.orders) {
			const keys = Object.keys(this.props.orders);
			orders = keys.map(key => {
				const order = this.props.orders[key];
				const address = `${order.customer.address.street}, ${order.customer.address.houseNo}, apartment ${order.customer.address.apartment} `;
				return (
					<PrevOrder
						key={key}
						address={address}
						meat={order.ingredients.meat}
						cheese={order.ingredients.cheese}
						salad={order.ingredients.salad}
						bacon={order.ingredients.bacon}
						price={order.price}
					/>
				);
			});
		} else if (this.props.error) {
			orders = (
				<Modal show={this.props.error}>
					Failed to fetch orders. Please check your network connection.
				</Modal>
			);
		}

		return (
			<React.Fragment>
				<h1 className={styles.histHeading}>Your previous orders</h1>
				<div className={styles.histContainer}>{orders}</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		orders: state.order.orders,
		loading: state.order.loading,
		error: state.order.hasError
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchOrders: () => dispatch(fetchOrders())
	};
};

// export default withErrorHandling(OrderHistory); //gotta fix those interceptors
export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
