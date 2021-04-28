import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createPlant } from "../../actions";
import ActionBar from "../ActionBar/ActionBar";

import * as yup from "yup";
import schema from "../../validation/createPlant";

//
// ====== MUI Imports ===
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LocalFlorist from "@material-ui/icons/LocalFlorist";
//  ===================

//
// ======== MUI Variables ====
const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
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
	input: {
		marginTop: "10px",
	},
	submit: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(2),
	},
	cancel: {},
}));

//
//
//
// =========== Component Starts Here!

const initialPlant = {
	nickname: "",
	species: "",
	h2o_frequency: "",
	image: "",
};

const initialFormErrors = {
	nickname: "",
	species: "",
	h2o_frequency: "",
};

const CreatePlant = (props) => {
	const [plant, setPlant] = useState(initialPlant);
	const history = useHistory();
	const { isLoading } = props;
	const classes = useStyles();

	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [submitDisabled, setSubmitDisabled] = useState(true);

	//! I moved this handleChange inside yupValidator
	// const handleChange = (event) => {
	// 	setPlant({
	// 		...plant,
	// 		[event.target.name]: event.target.value,
	// 	});
	// };

	const handleSubmit = (event) => {
		event.preventDefault();
		props.createPlant(plant);
		history.push("/plants");
	};

	// Yup validator
	const yupValidator = (event) => {
		const { name, value, type } = event.target;
		yup
			.reach(schema, name)
			.validate(value)
			.then(() => {
				setFormErrors({
					...formErrors,
					[name]: " ",
				});
			})
			.catch((err) => {
				setFormErrors({
					...formErrors,
					[name]: err.errors[0],
				});
			});
		setPlant({
			...plant,
			[event.target.name]: event.target.value,
		});
	};

	// ! useEffect for enabling/disabling submit button
	useEffect(() => {
		schema.isValid(plant).then((valid) => {
			setSubmitDisabled(!valid);
		});
	}, [plant.name, plant.species, plant.h2o_frequency]);

	//
	//
	//
	return (
		<div>
			<ActionBar />

			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LocalFlorist />
					</Avatar>
					<Typography component="h1" variant="h5">
						Plant Details
					</Typography>

					{/* FORM --- FORM --- FORM --- */}
					<form className={classes.form} onSubmit={handleSubmit} noValidate>
						<Grid container spacing={4}>
							<Grid item xs={12}>
								What do you call your plant?
								<TextField
									variant="outlined"
									required
									fullWidth
									id="nickname"
									label="Nickname"
									name="nickname"
									value={plant.nickname}
									onChange={yupValidator}
									className={classes.input}
								/>
								{/* Plant name error message */}
								<Typography
									className="errorMessage"
									variant="caption"
									color="error"
								>
									{formErrors.nickname}
								</Typography>
							</Grid>

							<Grid item xs={12}>
								What species is your plant?
								<TextField
									variant="outlined"
									required
									fullWidth
									id="species"
									label="e.g. Tomato, Rose, Hosta "
									name="species"
									value={plant.species}
									onChange={yupValidator}
									className={classes.input}
								/>
								{/* Plant species error message */}
								<Typography
									className="errorMessage"
									variant="caption"
									color="error"
								>
									{formErrors.species}
								</Typography>
							</Grid>

							<Grid item xs={12}>
								How long until it needs to be watered?
								<TextField
									variant="outlined"
									required
									fullWidth
									name="h2o_frequency"
									label="e.g. 3 days, 1 week, 2 weeks"
									id="h2o_frequency"
									value={plant.h2o_frequency}
									onChange={yupValidator}
									className={classes.input}
								/>
								{/* Water frequency error message */}
								<Typography
									className="errorMessage"
									variant="caption"
									color="error"
								>
									{formErrors.h2o_frequency}
								</Typography>
							</Grid>

							<Grid item xs={12}>
								Image URL
								<TextField
									variant="outlined"
									fullWidth
									name="image"
									id="image"
									value={plant.image}
									onChange={(event) => {
										setPlant({
											...plant,
											[event.target.name]: event.target.value,
										});
									}}
									className={classes.input}
								/>
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
							Add Plant
						</Button>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.cancel}
							component={Link}
							to="/plants"
						>
							Cancel
						</Button>
					</form>
				</div>
			</Container>
		</div>
	);
};
const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
});

export default connect(mapStateToProps, { createPlant })(CreatePlant);

//
//
//
//
// Kristin's Initial Code ----------------------------------
// =====================================

// const initialPlant = {
//     nickname: '',
//     species: '',
//     h2o_frequency: '',
//     image: ''
// }

// const CreatePlant = (props) => {
//     const [plant, setPlant] = useState(initialPlant);
//     const history = useHistory();

//     const handleChange = (event) => {
//         setPlant({
//             ...plant,
//             [event.target.name]: event.target.value
//         });
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         props.createPlant(plant);
//         history.push('/plants');
//     }

//     return (
//         <div>
//             <h1>Create Plant</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Nickname
//                     <input
//                         type="text"
//                         name="nickname"
//                         value={plant.nickname}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     Species
//                     <input
//                         type="text"
//                         name="species"
//                         value={plant.species}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     H2O Frequency
//                     <input
//                         type="text"
//                         name="h2o_frequency"
//                         value={plant.h2o_frequency}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     Image
//                     <input
//                         type="text"
//                         name="image"
//                         value={plant.image}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <button>Submit</button>
//             </form>
//         </div>
//     );
// }

// const mapStateToProps = (state) => ({
//     isLoading: state.isLoading
// });

// export default connect(mapStateToProps, {createPlant})(CreatePlant);
