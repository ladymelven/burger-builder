import React from "react";

import styles from "./OrderHistory.module.css";
import PrevOrder from "../PrevOrder/PrevOrder";
import Spinner from "../../UI/Spinner/Spinner";
// import withErrorHandling from "../../../utilities/withErrorHandling/withErrorHandling";

import axOrder from "../../../ajax/axios-orders";

class OrderHistory extends React.Component {
	state = {orders: null};

	componentDidMount() {
		axOrder.get("/orders.json").then(response => {
			this.setState({orders: response.data});
		});
	}

	render() {
		let orders = <Spinner />;
		if (this.state.orders) {
			const keys = Object.keys(this.state.orders);
			orders = keys.map(key => {
				const order = this.state.orders[key];
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
		}
		return (
			<React.Fragment>
				<h1 className={styles.histHeading}>Your previous orders</h1>
				<div className={styles.histContainer}>{orders}</div>
			</React.Fragment>
		);
	}
}

// export default withErrorHandling(OrderHistory); //gotta fix those interceptors
export default OrderHistory;
