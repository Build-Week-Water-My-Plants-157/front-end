import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
import { login, clearError } from "../../actions";

import * as yup from "yup";
import { loginSchema as schema } from "../../validation/plantForms";

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

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.dark,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	signup: {
		backgroundColor: "#C8E6C9",
		"&:hover": {
			backgroundColor: theme.palette.primary,
		},
	},
}));

const initialFormErrors = {
	username: "Username required.",
	password: "Password required",
};

const initialLoginCredentials = {
	username: "",
	password: "",
};

//
const Login = (props) => {
	const { isLoading, isLoggedIn, login, clearError } = props;
	const [loginCredentials, setLoginCredentials] = useState(
		initialLoginCredentials,
	);

	const history = useHistory();
	const classes = useStyles();

	const [submitDisabled, setSubmitDisabled] = useState(true);
	const [formErrors, setFormErrors] = useState(initialFormErrors);

	useEffect(() => {
		clearError();
	}, [clearError]);

	useEffect(() => {
		if (isLoggedIn) {
			history.push("/plants");
		}
	}, [isLoggedIn, history]);

	// const handleChange = (event) => {
	// 	setLoginCredentials({
	// 		...loginCredentials,
	// 		[event.target.name]: event.target.value,
	// 	});
	// };

	const handleSubmit = (event) => {
		event.preventDefault();
		login(loginCredentials);
	};

	const yupValidator = (event) => {
		const { name, value } = event.target;
		yup
			.reach(schema, name)
			.validate(value)
			.then(() => {
				setFormErrors({ ...formErrors, [name]: "" });
			})
			.catch((err) => {
				setFormErrors({ ...formErrors, [name]: err.errors[0] });
			});
		setLoginCredentials({
			...loginCredentials,
			[name]: value,
		});
	};

	// ! useEffect for enabling/disabling submit button
	useEffect(() => {
		schema.isValid(loginCredentials).then((valid) => {
			setSubmitDisabled(!valid);
			console.log(valid);
		});
	}, [loginCredentials]);

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
				<form className={classes.form} onSubmit={handleSubmit} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								type="text"
								name="username"
								value={loginCredentials.username}
								onChange={yupValidator}
								variant="outlined"
								required
								fullWidth
								id="userName"
								label="Username"
								autoFocus
							/>
							{/* username error message */}
							<Typography
								className="errorMessage"
								variant="caption"
								color="error"
							>
								{formErrors.username}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<TextField
								type="password"
								name="password"
								value={loginCredentials.password}
								onChange={yupValidator}
								variant="outlined"
								required
								fullWidth
								id="password"
								label="Password"
								autoComplete="current-password"
							/>

							{/* Password error message */}
							<Typography
								className="errorMessage"
								variant="caption"
								color="error"
							>
								{formErrors.password}
							</Typography>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						disabled={(isLoading, submitDisabled)}
					>
						Sign In
					</Button>
				</form>
				<h4>Don't have an account?</h4>
				<RouterLink to="/signup">
					<Button
						fullWidth
						variant="contained"
						color="primary"
						className={classes.signup}
					>
						Sign Up
					</Button>
				</RouterLink>
				{isLoading && (
					<Box display="flex" justifyContent="center" padding="20px">
						<CircularProgress />
					</Box>
				)}
			</div>
		</Container>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	isLoggedIn: state.isLoggedIn,
	user: state.user,
});

export default connect(mapStateToProps, { login, clearError })(Login);
