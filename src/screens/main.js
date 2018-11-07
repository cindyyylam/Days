import React, { Component } from "react";
import { STATUS_BAR_HEIGHT } from "../constants/constants";
import { Platform, BackHandler } from "react-native";
import EventList from "../components/event-list";
import ActionButton from "react-native-action-button";
import { getEvents } from "../service/api";
import { connect } from "react-redux";

class Main extends Component {
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
		BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
		this.props.getEvents();
	}

	componentWillUnmount() {
		BackHandler.removeEventListener(
			"hardwareBackPress",
			this.handleBackPress
		);
	}

	state = {
		events: []
	};

	handleBackPress = () => {
		return true;
	};

	handleAddEvent = () => {
		this.props.addEvent();
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

const mapStateToProps = state => ({
	state: state.root
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getEvents: () => getEvents(dispatch),
	addEvent: () => ownProps.navigation.navigate("Form")
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main);
