import { AsyncStorage } from "react-native";
import uuid from "uuid";
import {
	getEventsBegin,
	getEventsSuccess,
	getEventsFailure,
	saveEventBegin,
	saveEventSuccess,
	saveEventFailure,
	deleteEventBegin,
	deleteEventSuccess,
	deleteEventFailure
} from "../actions/actions";

export const getEvents = async dispatch => {
	dispatch(getEventsBegin());
	AsyncStorage.getItem("events")
		.then(res => JSON.parse(res))
		.then(events => dispatch(getEventsSuccess(events)))
		.catch(err => dispatch(getEventsFailure(err)));
};

export const saveEvent = async (dispatch, event) => {
	dispatch(saveEventBegin());
	AsyncStorage.getItem("events")
		.then(res => JSON.parse(res))
		.then(events => {
			events = events ? events : [];
			events.push({ ...event, id: uuid() });
			AsyncStorage.setItem("events", JSON.stringify(events))
				.then(
					AsyncStorage.getItem("events")
						.then(res => JSON.parse(res))
						.then(events => dispatch(saveEventSuccess(events)))
						.catch(err => dispatch(saveEventFailure(err)))
				)
				.catch(err => dispatch(saveEventFailure(err)));
		})
		.catch(err => dispatch(saveEventFailure(err)));
};

export const deleteEvent = async (dispatch, id) => {
	dispatch(deleteEventBegin());
	AsyncStorage.getItem("events")
		.then(res => JSON.parse(res))
		.then(events => events.filter(event => event.id !== id))
		.then(events =>
			AsyncStorage.setItem("events", JSON.stringify(events))
				.then(
					AsyncStorage.getItem("events")
						.then(res => JSON.parse(res))
						.then(events => dispatch(deleteEventSuccess(events)))
						.catch(err => dispatch(deleteEventFailure(err)))
				)
				.catch(err => dispatch(deleteEventFailure(err)))
		)
		.catch(err => dispatch(deleteEventFailure(err)));
};
