import * as types from "../actions/actionTypes";

let timer = null;
let counter = 0;

export const start = dispatch => {
	clearInterval(timer);
	timer = setInterval(() => dispatch(tick()), 1000);
	dispatch({ type: types.TIMER_START });
	dispatch(tick());
};

export const tick = () => ({
	type: types.TIMER_TICK,
	counter: counter + 1
});

export const stop = dispatch => {
	clearInterval(timer);
	dispatch({ type: types.TIMER_STOP });
};
