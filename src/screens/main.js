import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Main extends Component {
	static navigationOptions = () => ({
		headerStyle: {
			height: 0
		},
		headerLeft: null
	});

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>This is the main page.</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#475F8E"
	},
	text: {
		fontSize: 25,
		color: "#FFFFFF",
		fontWeight: "bold"
	}
});
