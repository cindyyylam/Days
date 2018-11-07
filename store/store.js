import { createStore, combineReducers, applyMiddleware } from "redux";
import { rootReducer } from "../src/reducers/root";
import { navReducer, middleware } from "../src/navigator";
import logger from "redux-logger";

const allReducers = combineReducers({
	root: rootReducer,
	nav: navReducer
});
const store = createStore(allReducers, applyMiddleware(logger, middleware));
export default store;
