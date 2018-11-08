import React, { Component } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { formatDateTime } from "../utils/formatting-utils";
import { connect } from "react-redux";
import { changeTitle, changeDate, toggleDatePicker } from "../actions/actions";

class EventForm extends Component {
	render() {
		const { title, date, showDatePicker } = this.props.state.form;
		const {
			handleChangeTitle,
			handleDatePicked,
			handleDatePickerHide,
			handleDatePress
		} = this.props;

		return (
			<View style={styles.form}>
				<View style={styles.fieldContainer}>
					<View style={styles.textContainer}>
						<TextInput
							style={styles.text}
							placeholder="Event Title"
							spellCheck={false}
							onChangeText={handleChangeTitle}
							value={title}
						/>
					</View>
					<TouchableOpacity>
						<View style={styles.textContainer}>
							<TextInput
								style={styles.text}
								placeholder="Event Date"
								spellCheck={false}
								value={formatDateTime(date)}
								onTouchStart={handleDatePress}
							/>
						</View>
					</TouchableOpacity>
					<DateTimePicker
						isVisible={showDatePicker}
						mode="datetime"
						onConfirm={handleDatePicked}
						onCancel={handleDatePickerHide}
					/>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	state: state.root
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleChangeTitle: title => dispatch(changeTitle(title)),
	handleDatePicked: date => dispatch(changeDate(date)),
	handleDatePickerHide: () => dispatch(toggleDatePicker(false)),
	handleDatePress: () => dispatch(toggleDatePicker(true))
});

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
