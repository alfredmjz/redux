import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const notificationSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		add(state, action) {
			return action.payload;
		},
		clear(timerObj) {
			clearInterval(timerObj);
			return "";
		},
	},
});

export const { add, clear } = notificationSlice.actions;

export const setNotification = (message, duration) => {
	return async (dispatch) => {
		const seconds = duration * 1000;
		dispatch(add(message));
		const timer = setTimeout(() => {
			dispatch(clear(timer));
		}, seconds);
	};
};
export default notificationSlice.reducer;
