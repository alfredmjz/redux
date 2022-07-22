import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import { useEffect } from "react";
import { setAnecdote } from "./reducers/anecdoteReducer";
import anecdoteServices from "./services/anecdotes";
import { useDispatch } from "react-redux";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		anecdoteServices.getAll().then((anecdote) => dispatch(setAnecdote(anecdote)));
	}, [dispatch]);
	return (
		<div>
			<h2>Anecdotes</h2>
			<Notification />
			<Filter />
			<AnecdoteList />
			<AnecdoteForm />
		</div>
	);
};

export default App;
