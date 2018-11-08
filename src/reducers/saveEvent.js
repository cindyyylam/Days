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
		events,
		form: {}
	};
};

export const saveEventFailure = (state, { errors }) => {
	return {
		...state,
		loading: false,
		errors,
		form: {}
	};
};
