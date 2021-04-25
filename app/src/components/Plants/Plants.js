import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { getUser, logout } from "../../actions";

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
import ActionBar from "../ActionBar/ActionBar";
//
//

//
// MUI variables STARTS HERE
function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Water My Plants
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	logoWrapper: {
		display: "flex",
		alignItems: "center",
	},
	icon: {
		marginRight: theme.spacing(2),
	},
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
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

// MUI variables ENDS HERE
//
//

const Plants = (props) => {
	const { user, getUser } = props;
	const classes = useStyles();
	useEffect(() => {
		getUser(localStorage.getItem("userId"));
	}, [user, getUser]);

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
									<Link href="/plants/create">
										<Button variant="contained" color="primary">
											Add Plant
										</Button>
									</Link>
								</Grid>
								{/* Uncomment for additional CTA */}
								{/* <Grid item>
									<Button variant="outlined" color="primary">
										Secondary action
									</Button>
								</Grid> */}
							</Grid>
						</div>
					</Container>
				</div>
				<Container className={classes.cardGrid} maxWidth="md">
					{/* End hero unit */}
					<Grid container spacing={4}>
						{user?.plants.map((card, index) => (
							<Grid item key={index} xs={12} sm={6} md={4}>
								<Card className={classes.card}>
									{/* --------THESE ARE JUST PLACEHOLDER CARDS---------- */}
									<CardMedia
										className={classes.cardMedia}
										image="https://source.unsplash.com/random"
										title="Image title"
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
											color="primary"
										>
											Delete
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
			{/* Footer */}
			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>
					Water My Plants
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="textSecondary"
					component="p"
				>
					WebPT_157 @LambaSchool
				</Typography>
				<Copyright />
			</footer>
			{/* End footer */}
		</React.Fragment>
	);
};
const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	user: state.user,
});
export default connect(mapStateToProps, { getUser, logout })(Plants);
