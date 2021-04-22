import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialSignupCredentials = {
    username: '',
    password: '',
    phoneNumber: ''
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
        axios.post('/api/signup', signupCredentials)
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
                        name="phoneNumber"
                        value={signupCredentials.phoneNumber}
                        onChange={handleChange}
                    />
                </label>
                <button>Sign Up</button>
            </form>
        </div>
    );
}
 
export default Signup;