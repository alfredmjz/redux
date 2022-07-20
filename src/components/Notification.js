import { useSelector, useDispatch } from "react-redux";
import { removeMessage } from "../reducers/notificationReducer";

const Notification = () => {
	const message = useSelector((state) => {
		if (state.notification[0] === "Voted") {
			return "You voted for " + state.notification[1];
		} else if (state.notification[0] === "Created") {
			return "You created " + state.notification[1];
		}
		return "";
	});
	const dispatch = useDispatch();
	const style = {
		border: "solid",
		padding: 10,
		borderWidth: 1,
	};

	const timer = setInterval(() => {
		dispatch(removeMessage());
	}, 5000);

	if (message !== "") {
		clearInterval(timer);
		return <div style={style}>{message}</div>;
	}
};

export default Notification;
