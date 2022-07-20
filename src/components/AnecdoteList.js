import { voteOf } from "../reducers/anecdoteReducer";
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
	const vote = (id, content) => {
		dispatch(voteOf(id));
		dispatch(addMessage(["Voted", content]));
	};

	return (
		<section>
			{anecdotes.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
					</div>
				</div>
			))}
		</section>
	);
};

export default AnecdoteList;
