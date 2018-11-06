import { createStackNavigator } from "react-navigation";
import Splash from "./screens/splash";
import Main from "./screens/main";
import { createNavigationReducer } from "react-navigation-redux-helpers";

export const AppNavigator = createStackNavigator(
	{
		Main: {
			screen: Main
		},
		Splash: {
			screen: Splash
		}
	},
	{
		initialRouteName: "Splash"
	}
);

export const navReducer = createNavigationReducer(AppNavigator);
