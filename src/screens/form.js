import React, { Component } from "react";
import { Platform, View } from "react-native";
import { STATUS_BAR_HEIGHT } from "../constants/constants";
import EventForm from "../components/event-form";

export default class Form extends Component {
	static navigationOptions = () => ({
		title: "Add an Event",
		headerStyle: {
			height: Platform.OS === "android" ? 45 + STATUS_BAR_HEIGHT : 45,
			backgroundColor: "#465B75"
		},
		headerTitleStyle: {
			height: Platform.OS === "android" ? STATUS_BAR_HEIGHT : 0,
			color: "#E0EEEE",
			flex: 1,
			textAlign: "center"
		},
		headerRight: <View />
	});

	render() {
		return <EventForm />;
	}
}
