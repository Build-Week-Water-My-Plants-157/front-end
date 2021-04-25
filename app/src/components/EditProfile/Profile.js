import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions";

function Profile(props) {
  const { user, getUser } = props;

  useEffect(() => {
    getUser(localStorage.getItem("userId"));
  }, [user, getUser]);

  return (
    <div>
      <h1>{props.user.username}'s Profile</h1>
      <div>
        <p> Username: {props.user.username}</p>
        <p> Phone Number: {props.user.phone_number}</p>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUser })(Profile);
