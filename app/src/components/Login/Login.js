import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";
import { connect } from 'react-redux';
import { login, clearError } from '../../actions';

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

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
          backgroundColor: theme.palette.primary.dark,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
        signup: {
          backgroundColor: "#C8E6C9",
          "&:hover": {
			backgroundColor: theme.palette.primary,
		  }
        }
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
            Login 
          </Typography>
            <form className={classes.form} onSubmit={handleSubmit} noValidate >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField 
                                type="text"
                                name="username"
                                value={loginCredentials.username}
                                onChange={handleChange}
                                variant="outlined"
                                required
                                fullWidth
                                id="userName"
                                label="Username"
                                autoFocus
                            />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                                type="password"
                                name="password"
                                value={loginCredentials.password}
                                onChange={handleChange}
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                autoComplete="current-password"
                            />
                    </Grid>
                </Grid>
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
            <RouterLink to="/signup">
				<Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.signup}
                >Sign Up</Button>
			</RouterLink>
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
        </Container>
    );
}
 
const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    isLoggedIn: state.isLoggedIn,
    user: state.user
});

export default connect(mapStateToProps, {login, clearError})(Login);