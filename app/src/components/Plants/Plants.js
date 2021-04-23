import React from "react";
import { connect } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import EcoIcon from "@material-ui/icons/Eco";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

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
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		// backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
		backgroundColor: "#c8e6c9",
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Plants = (props) => {
	const { user } = props;
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<EcoIcon className={classes.icon} />
					<Typography variant="h6" color="inherit" noWrap>
						Water My Plants
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				{/* Hero unit */}
				<div className={classes.heroContent}>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="textPrimary"
							gutterBottom
						>
							My Plants
						</Typography>
						<Typography
							variant="h5"
							align="center"
							color="textSecondary"
							paragraph
						>
							Well-water plants are happy plants or something like that idk
						</Typography>
						<div className={classes.heroButtons}>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Button variant="contained" color="primary">
										Add More Plants
									</Button>
								</Grid>
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
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image="https://source.unsplash.com/random"
										title="Image title"
									/>
									<CardContent className={classes.cardContent}>
										<Typography gutterBottom variant="h5" component="h2">
											Placeholder Card <br />
											*Name of plant:
										</Typography>
										<Typography>
											*Species: <br />
											*H2o Frequency:
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" color="primary">
											View
										</Button>
										<Button size="small" color="primary">
											Edit
										</Button>
										<Button size="small" color="primary">
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
	user: state.user,
});
export default connect(mapStateToProps, {})(Plants);

//
//
//
//
//
// ------ Kristin's initial codes!
// const Plants = (props) => {
//     const { user } = props;

//     return (
//         <div>
//             <h1>Plants</h1>
//             {
//                 user &&
//                 user.plants.map((plant) => {
//                     return (
//                         <div>{plant}</div> // Add plant component
//                     )
//                 })
//             }
//         </div>
//     );
// }

// const mapStateToProps = (state) => ({
//     user: state.user
// });

// export default connect(mapStateToProps, {})(Plants);
