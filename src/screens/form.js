import React, { Component } from "react";
import {
	StyleSheet,
	Platform,
	View,
	Text,
	TouchableHighlight,
	BackHandler
} from "react-native";
import { STATUS_BAR_HEIGHT } from "../constants/constants";
import EventForm from "../components/event-form";
import { saveEvent } from "../service/api";
import { connect } from "react-redux";

class Form extends Component {
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

	componentDidMount() {
		BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener(
			"hardwareBackPress",
			this.handleBackPress
		);
	}

	constructor(props) {
		super(props);
		this.handleEditForm = this.handleEditForm.bind(this);
	}

	state = {
		event: {}
	};

	handleBackPress = () => {
		this.props.navigation.goBack(null);
		return true;
	};

	handleAddPress = () => {
		const { event } = this.state;
		console.log("saving: " + JSON.stringify(event));
		const { title, date } = event;
		if (title && date) {
			this.props.handleSaveEvent(event);
		}
	};

	handleEditForm = event => {
		this.setState({ event });
		console.log("editted");
	};

	render() {
		return [
			<EventForm
				key="EventForm"
				editForm={e => this.handleEditForm(e)}
			/>,
			<View key="AddButton" style={styles.buttonContainer}>
				<TouchableHighlight
					onPress={this.handleAddPress}
					style={styles.button}
					underlayColor="#3479AC"
				>
					<Text style={styles.buttonText}>Add</Text>
				</TouchableHighlight>
			</View>
		];
	}
}

const mapStateToProps = state => ({
	state: state.root
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleSaveEvent: event => {
		saveEvent(dispatch, event);
		ownProps.navigation.goBack();
	}
});

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: "#475F8E",
		marginTop: -1
	},
	button: {
		height: 50,
		backgroundColor: "#5aa0e9",
		borderColor: "#5aa0e9",
		alignSelf: "stretch",
		margin: 30,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5
	},
	buttonText: {
		color: "#fff",
		fontSize: 18
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);
