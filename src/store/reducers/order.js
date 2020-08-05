import {
	PURCHASE,
	AJAX_FAIL,
	ORDER_INPROGRESS,
	AJAX_START,
	FETCH_ORDERS_SUCCESS
} from "../../vars/constants";

const initialState = {
	orders: null,
	hasError: false,
	loading: false,
	orderSent: false
};

const reducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case ORDER_INPROGRESS:
			newState.orderSent = false;
			break;
		case AJAX_START:
			newState.loading = true;
			break;
		case AJAX_FAIL:
			newState.hasError = true;
			newState.loading = false;
			break;
		case PURCHASE:
			newState.loading = false;
			newState.orderSent = true;
			break;
		case FETCH_ORDERS_SUCCESS:
			newState.loading = false;
			newState.orders = action.orders;
		//no default
	}
	return newState;
};

export default reducer;
