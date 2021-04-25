import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { logout } from "../../actions";

import Button from "@material-ui/core/Button";
import EcoIcon from "@material-ui/icons/Eco";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
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
	const history = useHistory();

	const handleLogout = (event) => {
		event.preventDefault();
		logout();
		history.push("/");
	};

	const handleEditProfile = () => {
		prompt("bears, beets, battlestar galactica");
	};

	return (
		<AppBar position="relative">
			<Toolbar>
				<Container className={classes.logoWrapper}>
					<EcoIcon className={classes.icon} />
					<Typography variant="h6" color="inherit" noWrap>
						Water My Plants
					</Typography>
				</Container>
				<Button variant="outlined" onClick={handleEditProfile}>
					Profile / Edit Profile
				</Button>
				<Button variant="outlined" onClick={handleLogout}>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default ActionBar;
