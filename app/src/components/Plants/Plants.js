import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { getUser, logout, deletePlant } from "../../actions";
import ActionBar from "../ActionBar/ActionBar";

//
//
// MUI imports
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

//
//

//
// MUI variable
const useStyles = makeStyles((theme) => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 0, 4),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		padding: theme.spacing(2),
		backgroundColor: "#c8e6c9",
	},
	noPlantCard: {
		height: theme.spacing(20),
		display: "flex",
		flexDirection: "column",
		padding: theme.spacing(4),
		marginTop: theme.spacing(4),
		borderRadius: theme.spacing(4),
		backgroundColor: "#c8e6c9",
	},
	cardButton: {
		color: theme.palette.primary.dark,
		"&:hover": {
			backgroundColor: theme.palette.primary.dark,
			color: "#fff",
		},
	},
	cardMedia: {
		paddingTop: "56.25%", // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	cancelButton: {
		color: "#888",
		"&:hover": {
			backgroundColor: "#888",
			color: "#fff",
		},
	},
	deleteButton: {
		color: "#dd300e",
		"&:hover": {
			backgroundColor: "#dd300e",
			color: "#fff",
		},
	},
}));
// MUI variable
//
//

const NoPlants = ({ user }) => {
	const classes = useStyles();
	return (
		<Container className={classes.noPlantCard} maxWidth="md">
			<Typography
				component="h5"
				variant="h5"
				align="center"
				color="textPrimary"
				gutterBottom
			>
				Welcome {user.username}!
			</Typography>
			<Typography
				component="h6"
				variant="h6"
				align="center"
				color="textPrimary"
			>
				You currently have no plants. Add a plant by clicking Add Plant button.
			</Typography>
		</Container>
	);
};

const Plants = (props) => {
	const [open, setOpen] = useState(false);
	const [plantToDelete, setPlantToDelete] = useState({});
	const { isLoading, user, getUser, deletePlant } = props;
	const classes = useStyles();

	useEffect(() => {
		getUser(localStorage.getItem("userId"));
	}, [getUser]);

	const handleClickOpen = (plant) => {
		setPlantToDelete(plant);
		setOpen(true);
	};

	const handleClose = () => {
		setPlantToDelete({});
		setOpen(false);
	};

	const handleDelete = () => {
		deletePlant(plantToDelete);
		setPlantToDelete({});
		setOpen(false);
	};

	return (
		<React.Fragment>
			<CssBaseline />
			<ActionBar />
			<main>
				{/* Hero unit */}
				<div className={classes.heroContent}>
					<Container maxWidth="sm">
						<Typography
							component="h3"
							variant="h3"
							align="center"
							color="textPrimary"
							gutterBottom
						>
							My Plants
						</Typography>
						<Typography
							variant="h5"
							align="center"
							fontStyle="italic"
							color="textSecondary"
							paragraph
						>
							Well-watered plants are happy plants or something like that idr
						</Typography>
						<div className={classes.heroButtons}>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Link
										href="/plants/create"
										style={{ textDecoration: "none" }}
									>
										<Button variant="contained" color="primary">
											Add Plant
										</Button>
									</Link>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container className={classes.cardGrid} maxWidth="md">
					{/* End hero unit */}
					{isLoading && (
						<Box display="flex" justifyContent="center" padding="20px">
							<CircularProgress />
						</Box>
					)}
					{user?.plants.length === 0 && <NoPlants user={user} />}
					{!isLoading && (
						<Grid container spacing={4}>
							{user?.plants.map((card, index) => (
								<Grid item key={index} xs={12} sm={6} md={4}>
									<Card className={classes.card}>
										{/* --------THESE ARE JUST PLACEHOLDER CARDS---------- */}
										<CardMedia
											className={classes.cardMedia}
											image={
												card.image
													? card.image
													: "https://picsum.photos/id/152/1600/900"
											}
											title={card.nickname}
										/>
										<CardContent className={classes.cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												Placeholder Card <br />
											</Typography>
											<Typography>
												Nickname: {card.nickname} <br />
												Species: {card.species} <br />
												H2o Frequency: {card.h2o_frequency}
											</Typography>
										</CardContent>
										<CardActions>
											<Button
												className={classes.cardButton}
												size="small"
												color="primary"
											>
												View
											</Button>
											<RouterLink to={`/plants/${card.id}/edit`}>
												<Button
													className={classes.cardButton}
													size="small"
													color="primary"
												>
													Edit
												</Button>
											</RouterLink>
											<Button
												className={classes.cardButton}
												size="small"
												onClick={() => handleClickOpen(card)}
											>
												Delete
											</Button>
											<Dialog
												open={open}
												onClose={handleClose}
												aria-labelledby="alert-dialog-title"
												aria-describedby="alert-dialog-description"
											>
												<DialogTitle id="alert-dialog-title">
													{"Delete Plant"}
												</DialogTitle>
												<DialogContent>
													<DialogContentText id="alert-dialog-description">
														Are you sure you would like to remove{" "}
														<strong>{plantToDelete.nickname}</strong> from your
														collection of plants?
													</DialogContentText>
												</DialogContent>
												<DialogActions>
													<Button
														onClick={handleClose}
														color="primary"
														className={classes.cancelButton}
													>
														Cancel
													</Button>
													<Button
														onClick={handleDelete}
														color="primary"
														autoFocus
														className={classes.deleteButton}
														disabled={isLoading}
													>
														Delete
													</Button>
												</DialogActions>
											</Dialog>
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
					)}
				</Container>
			</main>
		</React.Fragment>
	);
};
const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	user: state.user,
});
export default connect(mapStateToProps, { getUser, logout, deletePlant })(Plants);
