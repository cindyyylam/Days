import React, { Component } from "react";
import { STATUS_BAR_HEIGHT } from "../constants/constants";
import { Platform, BackHandler } from "react-native";
import EventList from "../components/event-list";
import ActionButton from "react-native-action-button";
import { getEvents } from "../service/api";
import { connect } from "react-redux";
import { start, stop } from "../components/timer";

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
		this.props.startTimer();
	}

	componentWillUnmount() {
		BackHandler.removeEventListener(
			"hardwareBackPress",
			this.handleBackPress
		);
		this.props.stopTimer();
	}

	handleBackPress = () => {
		return true;
	};

	render() {
		const { events } = this.props.state;
		const { addEvent } = this.props;

		return [
			<EventList key="FlatList" events={events} />,
			<ActionButton
				key="ActionButton"
				onPress={addEvent}
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
	addEvent: () => ownProps.navigation.navigate("Form"),
	startTimer: () => start(dispatch),
	stopTimer: () => stop(dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main);
