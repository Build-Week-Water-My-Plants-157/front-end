import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

//
const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));
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

const Footer = () => {
	const classes = useStyles();
	return (
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
	);
};

export default Footer;
