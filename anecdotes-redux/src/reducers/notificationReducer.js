import { createSlice } from "@reduxjs/toolkit";
const initialState = { timer: null, message: "" };

const notificationSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		add(state, action) {
			if (state.timer !== null) {
				clearTimeout(state.timer);
			}
			return { timer: action.payload.timer, message: action.payload.message };
		},
		clear(state, action) {
			clearTimeout(action.payload);
			return { timer: null, message: "" };
		},
	},
});

export const { add, clear } = notificationSlice.actions;

export const setNotification = (msg, duration) => {
	return async (dispatch) => {
		const seconds = duration * 1000;
		const t = setTimeout(() => {
			dispatch(clear(t));
		}, seconds);
		const payload = { timer: t, message: msg };
		dispatch(add(payload));
	};
};
export default notificationSlice.reducer;
