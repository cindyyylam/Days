import moment from "moment";

export const changeTitle = (state, { title }) => {
	const { form } = state;
	return {
		...state,
		form: {
			...form,
			title
		}
	};
};

export const changeDate = (state, { date }) => {
	const { form } = state;
	return {
		...state,
		form: {
			...form,
			date: moment(new Date(date)).format("YYYY-MM-DDTHH:mm:ss.sss"),
			showDatePicker: false
		}
	};
};

export const toggleDatePicker = (state, { toggle }) => {
	const { form } = state;
	return {
		...state,
		form: {
			...form,
			showDatePicker: toggle
		}
	};
};

export const timerTick = (state, { counter }) => {
	return {
		...state,
		counter
	};
};
