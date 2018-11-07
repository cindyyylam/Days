import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import EventCard from "./event-card";
import { connect } from "react-redux";

class EventList extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		events: this.props.events
	};

	componentDidMount() {
		setInterval(() => {
			this.setState({
				events: this.state.events.map(e => ({
					...e,
					timer: Date.now() // used just to trigger a rerender every second
				}))
			});
		}, 1000);
	}

	render() {
		const { events } = this.state;

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
