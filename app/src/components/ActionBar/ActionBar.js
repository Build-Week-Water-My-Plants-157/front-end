import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions";
import { useHistory } from "react-router-dom";

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
		cursor: "pointer",
	},
	icon: {
		marginRight: theme.spacing(2),
	},
}));

const ActionBar = (props) => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<AppBar position="relative">
			<Toolbar className={classes.toolBarWrapper}>
				<Container
					className={classes.logoWrapper}
					onClick={() => {
						history.push("/plants");
					}}
				>
					<EcoIcon className={classes.icon} />
					<Typography variant="h6" color="inherit" noWrap>
						Water My Plants
					</Typography>
				</Container>

				{/* Dropdown Menu */}
				<Dropdown logout={props.logout} />
			</Toolbar>
		</AppBar>
	);
};

export default connect(
	() => {
		return {};
	},
	{ logout },
)(ActionBar);
