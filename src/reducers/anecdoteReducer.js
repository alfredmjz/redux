import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

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
		voteOf(state, action) {
			const id = action.payload.id;
			state
				.map((anecdote) => {
					if (anecdote.id === id) {
						anecdote.votes += 1;
					}
					return anecdote;
				})
				.sort((a, b) => b.votes - a.votes);
		},
		appendAnecdote(state, action) {
			state.push(action.payload);
		},
		setAnecdote(state, action) {
			return action.payload;
		},
	},
});

export const initializeAnecdotes = () => {
	return async (dispatch) => {
		const anecdotes = await anecdoteService.getAll();
		dispatch(setAnecdote(anecdotes));
	};
};

export const createAnecdote = (content) => {
	return async (dispatch) => {
		const newAnecdote = await anecdoteService.createNew(content);
		dispatch(appendAnecdote(newAnecdote));
	};
};

export const updateAnecdote = (updatedObj) => {
	return async (dispatch) => {
		const updated = await anecdoteService.update({ ...updatedObj, votes: updatedObj.votes + 1 });
		dispatch(voteOf(updated));
	};
};
export const { newAnecdote, voteOf, appendAnecdote, setAnecdote } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
