import { ADD, REMOVE, SET, LOAD_FAIL } from "../../vars/constants";
import axios from "axios";

const setIngredients = (ingredients, price) => {
	return { type: SET, ingredients: ingredients, price: price };
};

export const init = () => {
	return dispatch => {
		axios
			.get("https://burger-builder-cdf0a.firebaseio.com/init.json")
			.then(response => {
				const ingredients = {
					bacon: response.data.ingredients.bacon,
					salad: response.data.ingredients.alad,
					cheese: response.data.ingredients.cheese,
					meat: response.data.ingredients.meat
				};
				const price = response.data.price;
				dispatch(setIngredients(ingredients, price));
			})
			.catch(error => {
				console.log(error.message);
				dispatch(throwError());
			});
	};
};

export const add = ingredient => {
	return {
		type: ADD,
		value: ingredient
	};
};

export const remove = ingredient => {
	return {
		type: REMOVE,
		value: ingredient
	};
};

const throwError = () => {
	return { type: LOAD_FAIL };
};
