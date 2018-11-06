import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { displayName as appTitle, author } from "../../app.json";

export default class Splash extends Component {
	componentDidMount() {
		setTimeout(() => {
			this.props.navigation.navigate("Main");
		}, 2000);
	}

	static navigationOptions = () => ({
		headerStyle: {
			height: 0
		},
		headerLeft: null
	});

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.titleWrapper}>
					<Image
						source={require("../../assets/logo.png")}
						style={styles.logo}
					/>
					<Text style={styles.title}>{appTitle}</Text>
				</View>
				<Text style={styles.subtitle}>Powered by {author}</Text>
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
	logo: {
		width: 250,
		resizeMode: "center"
	},
	title: {
		fontSize: 40,
		color: "#E0EEEE",
		fontWeight: "bold",
		marginTop: -200
	},
	titleWrapper: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: -200
	},
	subtitle: {
		color: "#C0D9D9",
		fontWeight: "100",
		paddingBottom: 20
	}
});
