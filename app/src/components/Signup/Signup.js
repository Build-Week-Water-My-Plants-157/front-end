import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { signup, clearError } from "../../actions";
import { connect } from "react-redux";
import * as yup from "yup";
import { signupSchema as schema } from "../../validation/plantForms";

// MUI Imports
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const initialSignupCredentials = {
	username: "",
	password: "",
	phone_number: "",
};
const initialFormErrors = {
	username: "",
	password: "",
	phone_number: "",
};

const Signup = (props) => {
	const [signupCredentials, setSignupCredentials] = useState(
		initialSignupCredentials,
	);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [disabled, setDisabled] = useState(true);
	const { isLoading, signup, clearError } = props;
	const history = useHistory();

	useEffect(() => {
		clearError();
	}, [clearError]);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setSignupCredentials({
			...signupCredentials,
			[name]: value,
		});
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
		setSignupCredentials({
			...signupCredentials,
			[name]: value,
		});
	};

	// useEffect for enabling/disabling submit button
	useEffect(() => {
		schema.isValid(signupCredentials).then((valid) => {
			setDisabled(!valid);
		});
	}, [signupCredentials]);

	const handleSubmit = (event) => {
		event.preventDefault();
		signup(signupCredentials, history);
	};

	// Styles using a MUI Theme
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
			marginTop: theme.spacing(3),
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
					Sign up
				</Typography>
				<form onSubmit={handleSubmit} className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								type="text"
								value={signupCredentials.username}
								onChange={yupValidator}
								errors="formErrors"
								autoComplete="uname"
								name="username"
								variant="outlined"
								required
								fullWidth
								id="userName"
								label="Username"
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
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								value={signupCredentials.password}
								onChange={yupValidator}
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
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								optional="true"
								fullWidth
								id="phoneNumber"
								label="Phone Number (Optional)"
								type="tel"
								name="phone_number"
								autoComplete="pnumber"
								value={signupCredentials.phone_number}
								onChange={handleChange}
							/>

							{/* phone number error message */}
							<Typography
								className="errorMessage"
								variant="caption"
								color="error"
							>
								{formErrors.phone_number}
							</Typography>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						disabled={(isLoading, disabled)}
					>
						Sign Up
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="/" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			{isLoading && (
				<Box display="flex" justifyContent="center" padding="20px">
					<CircularProgress />
				</Box>
			)}
		</Container>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
});

export default connect(mapStateToProps, { signup, clearError })(Signup);
