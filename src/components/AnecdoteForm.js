import { newAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { addMessage } from "../reducers/notificationReducer";
import anecdoteServices from "../services/anecdotes";

const AnecdoteForm = () => {
	const dispatch = useDispatch();

	const addAnecdote = async (event) => {
		event.preventDefault();
		const content = event.target.anecdote.value;
		event.target.anecdote.value = "";
		const newEntry = await anecdoteServices.createNew(content);
		dispatch(newAnecdote(newEntry));
		dispatch(addMessage(["Created", content]));
	};

	return (
		<section>
			<h2>create new</h2>
			<form onSubmit={addAnecdote}>
				<div>
					<input name='anecdote' />
				</div>
				<button type='create'>create</button>
			</form>
		</section>
	);
};

export default AnecdoteForm;
