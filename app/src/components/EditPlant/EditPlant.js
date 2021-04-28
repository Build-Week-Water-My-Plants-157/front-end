import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getUser, updatePlant } from "../../actions";

// MUI Imports
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LocalFlorist from "@material-ui/icons/LocalFlorist";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ActionBar from "../ActionBar/ActionBar";

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
		margin: theme.spacing(3, 0, 2),
	},
}));

const initialPlant = {
	id: "",
	nickname: "",
	species: "",
	h2o_frequency: "",
	image: "",
};

const EditPlant = (props) => {
	const [plant, setPlant] = useState(initialPlant);
	const history = useHistory();
	const { isLoading, user, getUser, updatePlant } = props;
	const { id } = useParams();
	const classes = useStyles();

	useEffect(() => {
		if (!user) {
			getUser(localStorage.getItem("userId"));
		} else {
			const plantToEdit = user.plants.find(
				(plant) => String(plant.id) === String(id),
			);
			setPlant(plantToEdit);
		}
	}, [user, getUser, setPlant, id]);

	const handleChange = (event) => {
		setPlant({
			...plant,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		updatePlant(plant);
		history.push("/plants");
	};

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
						Edit Plant
					</Typography>
					<form onSubmit={handleSubmit} className={classes.form} noValidate>
						<Grid container spacing={2}>
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
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								What species is your plant?
								<TextField
									variant="outlined"
									required
									fullWidth
									id="species"
									label="e.g. Tomato, Rose, Hosta"
									name="species"
									value={plant.species}
									onChange={handleChange}
									className={classes.input}
								/>
							</Grid>
							<Grid item xs={12}>
								How long until it needs to be watered?
								<TextField
									variant="outlined"
									required
									fullWidth
									id="h2o_frequency"
									label="e.g. 3 days, 1 week, 2 weeks"
									name="h2o_frequency"
									value={plant.h2o_frequency}
									onChange={handleChange}
									className={classes.input}
								/>
							</Grid>
							<Grid item xs={12}>
								Image URL
								<TextField
									variant="outlined"
									fullWidth
									id="image"
									name="image"
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
							disabled={isLoading}
						>
							Submit
						</Button>
					</form>
				</div>
			</Container>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	user: state.user,
});

export default connect(mapStateToProps, { getUser, updatePlant })(EditPlant);
