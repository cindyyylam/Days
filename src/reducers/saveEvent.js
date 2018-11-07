export const saveEventBegin = state => {
	return {
		...state,
		loading: true
	};
};

export const saveEventSuccess = (state, { events }) => {
	return {
		...state,
		loading: false,
		events
	};
};

export const saveEventFailure = (state, { errors }) => {
	return {
		...state,
		loading: false,
		errors
	};
};
