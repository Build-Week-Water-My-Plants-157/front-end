import React, { useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { Link, useHistory } from 'react-router-dom';

const axios = axiosWithAuth();

const initialLoginCredentials = {
    username: '',
    password: ''
}

const Login = () => {
    const [loginCredentials, setLoginCredentials] = useState(initialLoginCredentials);
    const history = useHistory();

    const handleChange = (event) => {
        setLoginCredentials({
            ...loginCredentials,
            [event.target.name]: event.target.value
        });
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser();
    }
    
    const loginUser = () => {
        axios.post('/api/login', loginCredentials)
        .then((response) => {
            console.log(response);
            localStorage.setItem('token', response.data.token);
            history.push('/plants');
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <input 
                        type="text"
                        name="username"
                        value={loginCredentials.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password
                    <input 
                        type="password"
                        name="password"
                        value={loginCredentials.password}
                        onChange={handleChange}
                    />
                </label>
                <button>Login</button>
            </form>
            <h2>or</h2>
            <Link to="/signup">
				<button>Sign Up</button>
			</Link>
        </div>
    );
}
 
export default Login;