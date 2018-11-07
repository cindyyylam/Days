export const getEventsBegin = state => {
	return {
		...state,
		loading: true
	};
};

export const getEventsSuccess = (state, { events }) => {
	return {
		...state,
		loading: false,
		events
	};
};

export const getEventsFailure = (state, { errors }) => {
	return {
		...state,
		loading: false,
		errors
	};
};
