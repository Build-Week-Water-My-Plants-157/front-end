import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, clearError } from '../../actions';

import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

const initialLoginCredentials = {
    username: '',
    password: ''
}

const Login = (props) => {
    const [loginCredentials, setLoginCredentials] = useState(initialLoginCredentials);
    const history = useHistory();
    const { isLoading, isLoggedIn, login, clearError } = props;

    useEffect(() => {
		clearError();
	}, []);

    useEffect(() => {
        if (isLoggedIn) {
            history.push('/plants');
        }
    }, [isLoggedIn, history]);

    const handleChange = (event) => {
        setLoginCredentials({
            ...loginCredentials,
            [event.target.name]: event.target.value
        });
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        login(loginCredentials);
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
                <button disabled={isLoading}>Login</button>
            </form>
            <h2>or</h2>
            <Link to="/signup">
				<button>Sign Up</button>
			</Link>
            {
                isLoading &&
                <Box
                    display="flex"
                    justifyContent="center"
                    padding="20px"
                >
                    <CircularProgress />
                </Box>
            }
        </div>
    );
}
 
const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    isLoggedIn: state.isLoggedIn,
    user: state.user
});

export default connect(mapStateToProps, {login, clearError})(Login);