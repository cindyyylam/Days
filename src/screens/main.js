import React, { Component } from "react";
import { STATUS_BAR_HEIGHT } from "../constants/constants";
import { Platform } from "react-native";
import EventList from "../components/event-list";
import ActionButton from "react-native-action-button";
import { getEvents } from "../service/api";

export default class Main extends Component {
	static navigationOptions = () => ({
		title: "My Events",
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
		headerLeft: null
	});

	componentDidMount() {
		let events = getEvents();
		this.setState({ events });
	}

	state = {
		events: []
	};

	handleAddEvent = () => {
		this.props.navigation.navigate("Form");
	};

	render() {
		const { events } = this.state;

		return [
			<EventList key="FlatList" events={events} />,
			<ActionButton
				key="ActionButton"
				onPress={this.handleAddEvent}
				buttonColor="rgba(231, 76, 60, 1)"
			/>
		];
	}
}
