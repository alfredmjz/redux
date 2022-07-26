import { updateAnecdote } from "../reducers/anecdoteReducer";
import { addMessage } from "../reducers/notificationReducer";
import { useSelector, useDispatch } from "react-redux";

const AnecdoteList = () => {
	const anecdotes = useSelector((state) => {
		if (state.filter !== "") {
			return state.anecdotes.filter(
				(anecdote) => anecdote.content.toUpperCase().indexOf(state.filter.toUpperCase()) > -1
			);
		}
		return state.anecdotes;
	});
	const dispatch = useDispatch();
	const vote = (anecdote) => {
		dispatch(updateAnecdote(anecdote));
		dispatch(addMessage(["Voted", anecdote.content]));
	};

	return (
		<section>
			{anecdotes.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote)}>vote</button>
					</div>
				</div>
			))}
		</section>
	);
};

export default AnecdoteList;
