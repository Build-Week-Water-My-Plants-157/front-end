import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const initialState = {
  username: "",
  phone_number: "",
};

export default function EditProfile() {
  const [values, setValues] = useState(initialState);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    setValues(initialState);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
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
            value={values.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number
          <input
            name="phone_number"
            type="text"
            value={values.phone_number}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </div>
    </form>
  );
}
