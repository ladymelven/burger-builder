import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import styles from "./App.module.css";

import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./components/Order/Checkout/Checkout";
import OrderHistory from "./components/Order/OrderHistory/OrderHistory";
import Toolbar from "./containers/Toolbar/Toolbar";

const App = props => {
	return (
		<React.Fragment>
			<Toolbar />
			<main className={styles.main}>
				<Switch>
					<Route path="/build" component={BurgerBuilder} />
					<Route path="/checkout" component={Checkout} />
					<Route path="/history" component={OrderHistory} />
					<Redirect from="/" to="/build" />
				</Switch>
			</main>
		</React.Fragment>
	);
};

export default App;
