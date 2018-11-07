import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import AppWithNavigationState from "./src/navigator";

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}
