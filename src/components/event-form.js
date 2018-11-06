import React, { Component } from "react";
import {
	View,
	Text,
	TouchableHighlight,
	TextInput,
	StyleSheet
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { formatDateTime } from "../utils/formatting-utils";

class EventForm extends Component {
	state = {
		title: null,
		date: ""
	};

	handleAddPress = () => {
		saveEvent(this.state).then(() => this.props.navigation.goBack());
	};

	handleChangeTitle = value => {
		this.setState({
			title: value
		});
	};

	handleDatePress = () => {
		this.setState({
			showDatePicker: true
		});
	};

	handleDatePicked = date => {
		this.setState({
			date
		});
	};

	handleDatePickerHide = () => {
		this.setState({
			showDatePicker: false
		});
	};

	render() {
		return (
			<View style={styles.form}>
				<View style={styles.fieldContainer}>
					<View style={styles.textContainer}>
						<TextInput
							style={styles.text}
							placeholder="Event Title"
							spellCheck={false}
							onChangeText={this.handleChangeTitle}
							value={this.state.title}
						/>
					</View>
					<View style={styles.textContainer}>
						<TextInput
							style={[styles.text, styles.borderTop]}
							placeholder="Event Date"
							spellCheck={false}
							value={formatDateTime(this.state.date.toString())}
							editable={!this.state.showDatePicker}
							onFocus={this.handleDatePress}
						/>
					</View>
					<DateTimePicker
						isVisible={this.state.showDatePicker}
						mode="datetime"
						onConfirm={this.handleDatePicked}
						onCancel={this.handleDatePickerHide}
					/>
				</View>
				<TouchableHighlight
					onPress={this.handleAddPress}
					style={styles.button}
					underlayColor="#3479ac"
				>
					<Text style={styles.buttonText}>Add</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	form: {
		flex: 1,
		backgroundColor: "#475F8E"
	},
	fieldContainer: {
		margin: 10,
		marginTop: 50
	},
	text: {
		height: 50,
		margin: 0,
		paddingLeft: 10,
		borderWidth: 5,
		backgroundColor: "#dadfe8",
		borderColor: "#dadfe8",
		borderRadius: 5
	},
	textContainer: {
		marginBottom: 10
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

export default EventForm;
