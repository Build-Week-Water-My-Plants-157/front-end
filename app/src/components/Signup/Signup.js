import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialSignupCredentials = {
    username: '',
    password: '',
    phone_number: ''
}

const Signup = () => {
    const [signupCredentials, setSignupCredentials] = useState(initialSignupCredentials);
    const history = useHistory();

    const handleChange = (event) => {
        setSignupCredentials({
            ...signupCredentials,
            [event.target.name]: event.target.value
        });
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        SignupUser();
    }
    
    const SignupUser = () => {
        axios.post('https://tt157-backend.herokuapp.com/api/auth/register', signupCredentials)
        .then((response) => {
            console.log(response);
            history.push('/');
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <input 
                        type="text"
                        name="username"
                        value={signupCredentials.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password
                    <input 
                        type="password"
                        name="password"
                        value={signupCredentials.password}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Phone Number
                    <input 
                        type="tel"
                        name="phone_number"
                        value={signupCredentials.phone_number}
                        onChange={handleChange}
                    />
                </label>
                <button>Sign Up</button>
            </form>
        </div>
    );
}
 
export default Signup;