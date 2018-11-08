import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import EventCard from "./event-card";
import { connect } from "react-redux";

class EventList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timer: 0
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				timer: Date.now() // used just to trigger a rerender every second
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const { events } = this.props.state;

		return (
			<FlatList
				style={styles.list}
				data={events}
				renderItem={({ item }) => <EventCard event={item} />}
				keyExtractor={item => item.id}
			/>
		);
	}
}

const mapStateToProps = state => ({
	state: state.root
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const styles = StyleSheet.create({
	list: {
		flex: 1,
		paddingTop: 20,
		backgroundColor: "#475F8E"
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EventList);
