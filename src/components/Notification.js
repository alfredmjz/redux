import { connect } from "react-redux";

const Notification = (props) => {
	const message = props.notification;
	const style = {
		border: "solid",
		padding: 10,
		borderWidth: 1,
		marginBottom: 5,
	};
	if (message.length) {
		return <div style={style}>{message}</div>;
	}
};

const mapStateToProps = (state) => {
	return {
		notification: state.notification,
	};
};

const ConnectedNotification = connect(mapStateToProps)(Notification);
export default ConnectedNotification;
