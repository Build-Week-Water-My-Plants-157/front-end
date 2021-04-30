import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, clearError } from '../../actions';

import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
	}, [clearError]);

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

    const useStyles = makeStyles((theme) => ({
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }));

      const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome, Login 
          </Typography>
            <form className={classes.form} onSubmit={handleSubmit} noValidate >
                <TextField 
                        type="text"
                        name="username"
                        value={loginCredentials.username}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        fullWidth
                        id="userName"
                        label="userName"
                        autoFocus
                    />
                <TextField
                        type="password"
                        name="password"
                        value={loginCredentials.password}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        fullWidth
                        id="password"
                        label="passsword"
                        autoComplete="current-password"
                    />
                </label>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
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