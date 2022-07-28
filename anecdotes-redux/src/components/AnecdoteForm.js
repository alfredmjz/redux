import { createAnecdote } from "../reducers/anecdoteReducer";
import { connect } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
	const addAnecdote = async (event) => {
		event.preventDefault();
		const content = event.target.anecdote.value;
		event.target.anecdote.value = "";
		props.createAnecdote(content);
		props.setNotification(`You created ${content}`, 10);
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

const ConnectedForm = connect(null, { createAnecdote, setNotification })(AnecdoteForm);

export default ConnectedForm;
