import React from "react";

// MUI imports
import EcoIcon from "@material-ui/icons/Eco";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Dropdown from "./Dropdown";
//

const useStyles = makeStyles((theme) => ({
	toolBarWrapper: {
		minHeight: theme.spacing(10),
		marginRight: theme.spacing(16),
	},
	logoWrapper: {
		display: "flex",
		alignItems: "center",
	},
	icon: {
		marginRight: theme.spacing(2),
	},
}));

const ActionBar = (props) => {
	const classes = useStyles();

	return (
		<AppBar position="relative">
			<Toolbar className={classes.toolBarWrapper}>
				<Container className={classes.logoWrapper}>
					<EcoIcon className={classes.icon} />
					<Typography variant="h6" color="inherit" noWrap>
						Water My Plants
					</Typography>
				</Container>

				{/* Dropdown Menu */}
				<Dropdown />
			</Toolbar>
		</AppBar>
	);
};

export default ActionBar;
