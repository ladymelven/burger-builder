import React from "react";
import PropTypes from "prop-types";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

import styles from "./BurgerPreview.module.css";

const BurgerPreview = props => {
	const ingredients = [];

	for (const ingredient in props.ingredients) {
		for (let i = 0; i < props.ingredients[ingredient]; i++) {
			ingredients.push(
				<BurgerIngredient type={ingredient} key={ingredient + i} />
			);
		}
	}

	return (
		<div className={styles.burgerContainer}>
			<div className={styles.burgerWrapper}>
				<BurgerIngredient type="bread-top" />
				{ingredients.length > 0 ? ingredients : <p>{props.placeholder}</p>}
				<BurgerIngredient type="bread-bottom" />
			</div>
		</div>
	);
};

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
};

export default BurgerPreview;
