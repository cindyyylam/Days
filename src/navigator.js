import { createStackNavigator } from "react-navigation";
import { createNavigationReducer } from "react-navigation-redux-helpers";
import Routes from "./config/routes";

export const AppNavigator = createStackNavigator(Routes, {
	initialRouteName: "Splash"
});

export const navReducer = createNavigationReducer(AppNavigator);
