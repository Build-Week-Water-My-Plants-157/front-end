import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions";
import { useHistory } from "react-router-dom";

function Profile(props) {
  const { getUser } = props;

  const { push } = useHistory();

  const editProfile = (event) => {
    event.preventDefault();
    push("/editProfile");
  };

  useEffect(() => {
    getUser(localStorage.getItem("userId"));
  }, [getUser]);

  return (
    <div>
      <h1>{props.user?.username}'s Profile</h1>
      <div>
        <p> Username: {props.user?.username}</p>
        <p> Phone Number: {props.user?.phone_number}</p>
      </div>
      <button onClick={editProfile}>Edit Profile</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUser })(Profile);
