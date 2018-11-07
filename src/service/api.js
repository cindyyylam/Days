import { AsyncStorage } from "react-native";
import uuid from "uuid";
import {
	getEventsBegin,
	getEventsSuccess,
	getEventsFailure
} from "../actions/actions";

export const getEvents = async dispatch => {
	dispatch(getEventsBegin());
	AsyncStorage.getItem("events")
		.then(res => JSON.parse(res))
		.then(events => dispatch(getEventsSuccess(events)))
		.catch(err => dispatch(getEventsFailure(err)));
};

export const saveEvent = event => {
	let events = [];
	events.push({
		...event,
		id: uuid()
	});
	console.log("sending event:" + JSON.stringify(events));
	debugger;
	AsyncStorage.setItem("events", JSON.stringify(events));
};

export const deleteEvent = id => {
	let events = getEvents();
	let request = events.filter(event => event.id !== id);
	AsyncStorage.setItem("events", JSON.stringify(request));
};
