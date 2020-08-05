import * as constants from "../../vars/constants";

const initialState = {
	ingredients: null,
	price: 0,
	hasError: false
};

const reducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case constants.SET:
			newState.ingredients = action.ingredients;
			newState.price = action.price;
			break;
		case constants.ADD:
			newState.ingredients[action.value]++;
			newState.price += constants.PRICES[action.value];
			break;
		case constants.REMOVE:
			newState.ingredients[action.value]--;
			newState.price -= constants.PRICES[action.value];
			break;
		case constants.LOAD_FAIL:
			newState.hasError = true;
		//no default
	}
	return newState;
};

export default reducer;
