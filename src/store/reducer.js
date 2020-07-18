import * as constants from "../vars/constants";

const initialState = {
	ingredients: {
		bacon: 0,
		salad: 0,
		cheese: 0,
		meat: 0
	},
	price: 2
};

const reducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case "ADD":
			newState.ingredients[action.value]++;
			newState.price += constants.PRICES[action.value];
			break;
		case "REMOVE":
			newState.ingredients[action.value]--;
			newState.price -= constants.PRICES[action.value];
			break;

		//no default
	}
	return newState;
};

export default reducer;
