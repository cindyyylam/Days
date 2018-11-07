import { createStackNavigator } from "react-navigation";
import {
	reduxifyNavigator,
	createNavigationReducer,
	createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import Routes from "./config/routes";

export const AppNavigator = createStackNavigator(Routes, {
	initialRouteName: "Splash"
});

export const middleware = createReactNavigationReduxMiddleware(
	"root",
	state => state.navigation
);

export const navReducer = createNavigationReducer(AppNavigator);

const App = reduxifyNavigator(AppNavigator, "root");

const mapStateToProps = state => ({
	state: state.nav
});

export default connect(mapStateToProps)(App);
