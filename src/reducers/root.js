import * as types from "../actions/actionTypes";
import {
	getEventsBegin,
	getEventsSuccess,
	getEventsFailure
} from "../reducers/getEvents";

const initialState = {
	events: [],
	loading: false,
	errors: null
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_EVENTS_BEGIN:
			return getEventsBegin(state, action);
		case types.GET_EVENTS_SUCCESS:
			return getEventsSuccess(state, action);
		case types.GET_EVENTS_FAILURE:
			return getEventsFailure(state, action);
		default:
			return state;
	}
};
