import { createStackNavigator } from "react-navigation";
import Splash from "./screens/splash";
import Main from "./screens/main";
import Form from "./screens/form";
import { createNavigationReducer } from "react-navigation-redux-helpers";

export const AppNavigator = createStackNavigator(
	{
		Main: {
			screen: Main
		},
		Splash: {
			screen: Splash
		},
		Form: {
			screen: Form
		}
	},
	{
		initialRouteName: "Splash"
	}
);

export const navReducer = createNavigationReducer(AppNavigator);
