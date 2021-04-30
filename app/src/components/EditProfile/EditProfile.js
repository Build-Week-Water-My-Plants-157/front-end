import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { updateUser, getUser } from "../../actions";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import ActionBar from '../ActionBar/ActionBar';

// MUI Imports
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const initialState = {
  password: "",
  phone_number: "",
};

const EditProfile = (props) => {
  const [user, setUser] = useState(initialState);
  const history = useHistory();
  const { isLoading, updateUser, getUser } = props;

  const simpleValidator = new SimpleReactValidator();

  useEffect(() => {
		getUser(localStorage.getItem("userId"));
	}, [getUser]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (simpleValidator.allValid()) {
      updateUser(user, user);
      history.push("/plants");
    } else {
      simpleValidator.showMessages();
    }
  };

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.dark,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ActionBar />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Profile
          </Typography>
          <form onSubmit={onSubmit} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={user.password}
                  onChange={handleChange}
                  onBlur={simpleValidator.showMessageFor("password")}
                />
                {simpleValidator.message(
                  "password",
                  user.password,
                  "required|alpha_num|min:4|max:15"
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  type="tel"
                  name="phone_number"
                  autoComplete="pnumber"
                  value={user.phone_number}
                  onChange={handleChange}
                  onBlur={simpleValidator.showMessageFor("phone_number")}
                />
                {simpleValidator.message(
                  "phone_number",
                  user.phone_number,
                  ['required', {regex: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/}]
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
          {
            isLoading &&
            <Box
                display="flex"
                justifyContent="center"
                padding="20px"
            >
                <CircularProgress />
            </Box>
          }
        </div>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  user: state.user
});

export default connect(mapStateToProps, { updateUser, getUser })(EditProfile);
