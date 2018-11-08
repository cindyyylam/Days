import React, { Component } from "react";
import {
	StyleSheet,
	Platform,
	View,
	Text,
	TouchableOpacity,
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

	handleBackPress = () => {
		// TODO: temporary solution, could this be placed in mapDispatchToProps?
		this.props.navigation.goBack(null);
		return true;
	};

	render() {
		const { form } = this.props.state;
		const { title, date } = form;

		return [
			<EventForm key="EventForm" />,
			<View key="AddButton" style={styles.buttonContainer}>
				<TouchableOpacity
					disabled={!title || !date}
					onPress={() => this.props.handleSaveEvent(form)}
					style={styles.button}
					underlayColor="#3479AC"
				>
					<Text style={styles.buttonText}>Add</Text>
				</TouchableOpacity>
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
