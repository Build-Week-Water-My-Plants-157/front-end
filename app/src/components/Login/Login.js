import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, getUser } from '../../actions';

const initialLoginCredentials = {
    username: '',
    password: ''
}

const Login = (props) => {
    const [loginCredentials, setLoginCredentials] = useState(initialLoginCredentials);
    const history = useHistory();

    useEffect(() => {
        if (props.isLoggedIn) {
            history.push('/plants');
        }
    }, [props.isLoggedIn]);

    const handleChange = (event) => {
        setLoginCredentials({
            ...loginCredentials,
            [event.target.name]: event.target.value
        });
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(loginCredentials);
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
    isLoggedIn: state.isLoggedIn,
    user: state.user
});

export default connect(mapStateToProps, {login, getUser})(Login);