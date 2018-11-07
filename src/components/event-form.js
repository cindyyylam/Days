import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { formatDateTime } from "../utils/formatting-utils";
import { connect } from "react-redux";

class EventForm extends Component {
	state = {
		title: null,
		date: ""
	};

	handleChangeTitle = title => {
		this.setState({
			title
		});
		const { date } = this.state;
		this.props.editForm({
			title,
			date
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
		const { title } = this.state;
		this.props.editForm({
			title,
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
							style={styles.text}
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
			</View>
		);
	}
}

const mapStateToProps = state => ({
	state: state.root
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

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
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EventForm);
