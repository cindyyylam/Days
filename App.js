import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { AppNavigator } from "./src/navigator";

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppNavigator />
			</Provider>
		);
	}
}
