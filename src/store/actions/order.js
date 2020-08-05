import {
	PURCHASE,
	AJAX_START,
	AJAX_FAIL,
	ORDER_INPROGRESS,
	FETCH_ORDERS_SUCCESS
} from "../../vars/constants";

import axiosOrder from "../../ajax/axios-orders";

const ajaxStart = () => {
	return {
		type: AJAX_START
	};
};

const ajaxFail = error => {
	return {
		type: AJAX_FAIL,
		error: error
	};
};

const purchase = (order, id) => {
	return {
		type: PURCHASE,
		order: order,
		id: id
	};
};

export const attemptPurchase = order => {
	return dispatch => {
		dispatch(ajaxStart());
		axiosOrder
			.post("/orders.json", order)
			.then(response => {
				const id = response.data.name;
				dispatch(purchase(order, id));
			})
			.catch(error => {
				console.log(error);
				dispatch(ajaxFail());
			});
	};
};

export const orderInprogress = () => {
	return {
		type: ORDER_INPROGRESS
	};
};

const fetchOrdersSuccess = orders => {
	return { type: FETCH_ORDERS_SUCCESS, orders: orders };
};

export const fetchOrders = () => {
	return dispatch => {
		dispatch(ajaxStart());
		axiosOrder
			.get("/orders.json")
			.then(response => {
				dispatch(fetchOrdersSuccess(response.data));
			})
			.catch(error => {
				dispatch(ajaxFail(error));
			});
	};
};
