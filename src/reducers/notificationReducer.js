import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const notificationSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		addMessage(state, action) {
			return action.payload;
		},
		removeMessage() {
			return [];
		},
	},
});

export const { addMessage, removeMessage } = notificationSlice.actions;
export default notificationSlice.reducer;
