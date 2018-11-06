import { createStore, compose, combineReducers } from "redux";
import { rootReducer } from "../src/reducers/root";
import { navReducer } from "../src/navigator";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const allReducers = combineReducers({
	root: rootReducer,
	nav: navReducer
});
const store = createStore(allReducers, composeEnhancers());
export default store;
