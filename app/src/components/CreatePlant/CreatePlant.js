import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPlant } from "../../actions";

//
// ====== MUI Imports ===
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
//  ===================

//
// ======== MUI Variables ====
const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const CreatePlant = () => {
	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Add a Plant
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="nickname"
								label="Nickname of Plant"
								name="nickname"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="species"
								label="Species"
								name="species"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="h2o_frequency"
								label="H2o Frequency"
								id="h2o_frequency"
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
						Add
					</Button>
				</form>
			</div>
		</Container>
	);
};

export default CreatePlant;

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
