import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions";
import ActionBar from "../ActionBar/ActionBar";

function Profile(props) {
	const { getUser } = props;

	useEffect(() => {
		getUser(localStorage.getItem("userId"));
	}, [getUser]);

	return (
		<div>
			<ActionBar />
			<h1>{props.user?.username}'s Profile</h1>
			<div>
				<p> Username: {props.user?.username}</p>
				<p> Phone Number: {props.user?.phone_number}</p>
			</div>
		</div>
	);
}
const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps, { getUser })(Profile);
