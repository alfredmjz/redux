import { createSlice } from "@reduxjs/toolkit";

const anecdotesAtStart = [];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
	return {
		content: anecdote,
		id: getId(),
		votes: 0,
	};
};

const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
	name: "anecdotes",
	initialState,
	reducers: {
		newAnecdote(state, action) {
			const content = action.payload;
			state.push({
				content,
				id: getId(),
				votes: 0,
			});
		},
		voteOf(state, action) {
			const id = action.payload;
			state.map((anecdote) => {
				if (anecdote.id === id) {
					anecdote.votes += 1;
				}
				return anecdote;
			});
			state.sort((a, b) => b.votes - a.votes);
		},
		appendAnecdote(state, action) {
			state.push(action.payload);
		},
		setAnecdote(state, action) {
			return action.payload;
		},
	},
});

export const { newAnecdote, voteOf, appendAnecdote, setAnecdote } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
