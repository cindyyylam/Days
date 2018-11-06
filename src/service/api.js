import { AsyncStorage } from "react-native";
import uuid from "uuid";

export const getEvents = async () => {
	try {
		let response = await AsyncStorage.getItem("events");
		let events = JSON.parse(response);
		return Object.keys(events).length ? [] : events;
	} catch (err) {
		console.log(err);
		AsyncStorage.setItem("events", []);
	}
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
