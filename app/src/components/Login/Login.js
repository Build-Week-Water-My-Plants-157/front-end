import React, { useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../actions';

const axios = axiosWithAuth();

const initialLoginCredentials = {
    username: '',
    password: ''
}

const Login = (props) => {
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
        axios.post('http://localhost:5000/api/auth/login', loginCredentials)
        .then((response) => {
            console.log(response);
            localStorage.setItem('token', response.data.token);

            const parseJwt = (token) => {
                if (!token) {
                    return;
                }
                const base64Url = token.split('.')[1];
                const base64 = base64Url
                    .replace('-', '+')
                    .replace('_', '/');
                return JSON.parse(window.atob(base64));
            };

            const userId = parseJwt(response.data.token).subject;
            localStorage.setItem('userId', userId);
            props.getUser(userId);
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
 
const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    user: state.user
});

export default connect(mapStateToProps, {getUser})(Login);