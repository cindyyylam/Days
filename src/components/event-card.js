import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import PropTypes from "prop-types";
import { formatDate, getCountdownParts } from "../utils/formatting-utils";
import Swipeout from "react-native-swipeout";

export default function EventCard({ event }) {
	const { date, title, id } = event;
	const { days, hours, minutes, seconds } = getCountdownParts(date);
	const swipeSettings = {
		autoClose: true,
		style: styles.swipeout,
		right: [
			{
				onPress: () => {
					Alert.alert(
						"Alert",
						"Are you sure you want to delete this event?",
						[
							{
								text: "No",
								onPress: () => {
									console.log("Cancel pressed");
								},
								style: "cancel"
							},
							{
								text: "Yes",
								onPress: () => {}
							}
						],
						{ cancelable: true }
					);
				},
				text: "Delete",
				type: "delete"
			}
		],
		rowId: id,
		secId: 1
	};

	return (
		<Swipeout {...swipeSettings}>
			<View style={styles.card}>
				<View style={styles.cardHeader}>
					<Text style={styles.date}>{formatDate(date)}</Text>
					<Text style={styles.title}>{title}</Text>
				</View>

				<View style={styles.counterContainer}>
					<View style={styles.counter}>
						<Text style={styles.counterText}>{days}</Text>
						<Text style={styles.counterLabel}>DAYS</Text>
					</View>

					<View style={styles.counter}>
						<Text style={styles.counterText}>{hours}</Text>
						<Text style={styles.counterLabel}>HOURS</Text>
					</View>

					<View style={styles.counter}>
						<Text style={styles.counterText}>{minutes}</Text>
						<Text style={styles.counterLabel}>MINUTES</Text>
					</View>

					<View style={styles.counter}>
						<Text style={styles.counterText}>{seconds}</Text>
						<Text style={styles.counterLabel}>SECONDS</Text>
					</View>
				</View>
			</View>
		</Swipeout>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#fff",
		flex: 1,
		paddingTop: 10,
		paddingBottom: 20
	},
	cardHeader: {
		flex: 1,
		flexDirection: "row"
	},
	date: {
		fontWeight: "200",
		fontSize: 15,
		color: "#bdbdbd",
		width: "30%",
		textAlign: "right"
	},
	title: {
		fontSize: 15,
		fontWeight: "300",
		marginLeft: 7,
		textAlign: "left"
	},
	counterContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingLeft: "5%",
		paddingRight: "5%"
	},
	counter: {
		fontSize: 40,
		textAlign: "center"
	},
	counterText: {
		fontSize: 40,
		textAlign: "center"
	},
	counterLabel: {
		fontSize: 13,
		fontWeight: "100",
		color: "#a3a3a3",
		textAlign: "center",
		paddingTop: 0
	},
	swipeout: {
		backgroundColor: "#fff",
		marginTop: 5,
		marginBottom: 5
	}
});

EventCard.propTypes = {
	event: PropTypes.shape({
		title: PropTypes.string.isRequired,
		date: PropTypes.instanceOf(Date)
	})
};
