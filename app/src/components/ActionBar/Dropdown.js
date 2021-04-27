import React from "react";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../actions";

//
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
//

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	menuItem: {
		color: theme.palette.primary.dark,
		"&:hover": {
			backgroundColor: theme.palette.primary.dark,
			color: "#fff",
		},
	},
}));

export default function Dropdown() {
	const classes = useStyles();
	const history = useHistory();

	const handleLogout = (event) => {
		event.preventDefault();
		logout();
		history.push("/");
	};

	//
	//
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<div className={classes.root}>
			<div>
				<Button
					ref={anchorRef}
					aria-controls={open ? "menu-list-grow" : undefined}
					aria-haspopup="true"
					onClick={handleToggle}
					variant="outlined"
				>
					<ArrowDropDownIcon />
					Menu
				</Button>
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					role={undefined}
					transition
					disablePortal
				>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin:
									placement === "bottom" ? "center top" : "center bottom",
							}}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList
										autoFocusItem={open}
										id="menu-list-grow"
										onKeyDown={handleListKeyDown}
									>
										<MenuItem
											className={classes.menuItem}
											component={Link}
											to="/plants"
										>
											View Plants
										</MenuItem>

										<MenuItem
											className={classes.menuItem}
											component={Link}
											to="/profile"
										>
											Edit Profile
										</MenuItem>

										<MenuItem
											className={classes.menuItem}
											onClick={handleLogout}
										>
											Logout
										</MenuItem>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</div>
	);
}
