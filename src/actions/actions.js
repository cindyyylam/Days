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

export const saveEventBegin = () => {
	return {
		type: types.SAVE_EVENT_BEGIN
	};
};

export const saveEventSuccess = events => {
	return {
		type: types.SAVE_EVENT_SUCCESS,
		events
	};
};

export const saveEventFailure = errors => {
	return {
		type: types.SAVE_EVENT_FAILURE,
		errors
	};
};

export const deleteEventBegin = () => {
	return {
		type: types.DELETE_EVENT_BEGIN
	};
};

export const deleteEventSuccess = events => {
	return {
		type: types.DELETE_EVENT_SUCCESS,
		events
	};
};

export const deleteEventFailure = errors => {
	return {
		type: types.DELETE_EVENT_FAILURE,
		errors
	};
};

export const changeTitle = title => {
	return {
		type: types.CHANGE_TITLE,
		title
	};
};

export const changeDate = date => {
	return {
		type: types.CHANGE_DATE,
		date: date.toString()
	};
};

export const toggleDatePicker = toggle => {
	return {
		type: types.TOGGLE_DATE_PICKER,
		toggle
	};
};
