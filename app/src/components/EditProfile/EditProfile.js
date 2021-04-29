import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { updateUser } from "../../actions";
import { connect } from "react-redux";

const initialState = {
  username: "",
  password: "",
  phone_number: "",
};

const EditProfile = (props) => {
  const [user, setUser] = useState(initialState);
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    props.updateUser(user);
    history.push("/plants");
  };

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h1>Edit Profile</h1>
        <label>
          Username
          <input
            name="username"
            type="text"
            value={user.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="text"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number
          <input
            name="phone_number"
            type="text"
            value={user.phone_number}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { updateUser })(EditProfile);
