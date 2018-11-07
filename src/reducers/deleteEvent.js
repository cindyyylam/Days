export const deleteEventBegin = state => {
	return {
		...state,
		loading: true
	};
};

export const deleteEventSuccess = (state, { events }) => {
	return {
		...state,
		loading: false,
		events
	};
};

export const deleteEventFailure = (state, { errors }) => {
	return {
		...state,
		loading: false,
		errors
	};
};
