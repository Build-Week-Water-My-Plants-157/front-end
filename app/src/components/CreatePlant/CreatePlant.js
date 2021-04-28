import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createPlant } from "../../actions";
import ActionBar from "../ActionBar/ActionBar";

import SimpleReactValidator from "simple-react-validator";

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

const CreatePlant = (props) => {
	const [plant, setPlant] = useState(initialPlant);
	const history = useHistory();
	const { isLoading } = props;
	const classes = useStyles();

	const [submitDisabled, setSubmitDisabled] = useState(true);
	const simpleValidator = new SimpleReactValidator();

	const handleChange = (event) => {
		setPlant({
			...plant,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (simpleValidator.allValid()) {
			props.createPlant(plant);
			history.push("/plants");
		} else {
			simpleValidator.showMessages();
			// // rerender to show messages for the first time
			// this.forceUpdate();
		}
	};

	// Add Plant Enable/Disable button with validation
	useEffect(() => {
		{
			simpleValidator.allValid() &&
				setSubmitDisabled(!simpleValidator.allValid());
		}
	}, [plant.nickname, plant.species, plant.h2o_frequency]);

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
									onChange={handleChange}
									className={classes.input}
									onBlur={simpleValidator.showMessageFor("nickname")}
								/>
								{/* Plant name error message */}
								<Typography
									className="errorMessage"
									variant="caption"
									color="error"
								>
									{simpleValidator.message(
										"nickname",
										plant.nickname,
										"required|alpha_num_space|min:2|max:15",
									)}
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
									onChange={handleChange}
									className={classes.input}
									onBlur={simpleValidator.showMessageFor("species")}
								/>
								{/* Plant species error message */}
								<Typography
									className="errorMessage"
									variant="caption"
									color="error"
								>
									{simpleValidator.message(
										"species",
										plant.species,
										"required|alpha_num_space|min:2|max:15",
									)}
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
									onChange={handleChange}
									className={classes.input}
									onBlur={simpleValidator.showMessageFor("frequency")}
								/>
								{/* Water frequency error message */}
								<Typography
									className="errorMessage"
									variant="caption"
									color="error"
								>
									{simpleValidator.message(
										"frequency",
										plant.h2o_frequency,
										"required|alpha_num_space|min:2|max:15",
									)}
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
									onChange={handleChange}
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
