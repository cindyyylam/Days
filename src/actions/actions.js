import * as types from "./actionTypes";

export const getEventsBegin = () => {
	return {
		type: types.GET_EVENTS_BEGIN
	};
};

export const getEventsSuccess = events => {
	return {
		type: types.GET_EVENTS_SUCCESS,
		events
	};
};

export const getEventsFailure = errors => {
	return {
		type: types.GET_EVENTS_FAILURE,
		errors
	};
};
