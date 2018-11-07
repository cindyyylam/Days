import * as types from "../actions/actionTypes";
import {
	getEventsBegin,
	getEventsSuccess,
	getEventsFailure
} from "../reducers/getEvents";
import {
	saveEventBegin,
	saveEventSuccess,
	saveEventFailure
} from "../reducers/saveEvent";
import {
	deleteEventBegin,
	deleteEventSuccess,
	deleteEventFailure
} from "../reducers/deleteEvent";

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
		case types.SAVE_EVENT_BEGIN:
			return saveEventBegin(state, action);
		case types.SAVE_EVENT_SUCCESS:
			return saveEventSuccess(state, action);
		case types.SAVE_EVENT_FAILURE:
			return saveEventFailure(state, action);
		case types.DELETE_EVENT_BEGIN:
			return deleteEventBegin(state, action);
		case types.DELETE_EVENT_SUCCESS:
			return deleteEventSuccess(state, action);
		case types.DELETE_EVENT_FAILURE:
			return deleteEventFailure(state, action);
		default:
			return state;
	}
};
