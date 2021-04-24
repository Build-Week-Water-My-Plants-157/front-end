import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// MUI Imports
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  export default function SignUp() {
    const classes = useStyles();
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
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
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }

// end here

// const initialSignupCredentials = {
//     username: '',
//     password: '',
//     phone_number: ''
// }

// const Signup = () => {
//     const [signupCredentials, setSignupCredentials] = useState(initialSignupCredentials);
//     const history = useHistory();

//     const handleChange = (event) => {
//         setSignupCredentials({
//             ...signupCredentials,
//             [event.target.name]: event.target.value
//         });
//     }
    
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         SignupUser();
//     }
    
//     const SignupUser = () => {
//         axios.post('https://tt157-backend.herokuapp.com/api/auth/register', signupCredentials)
//         .then((response) => {
//             console.log(response);
//             history.push('/');
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//     }

//     return (
//         <div>
//             <h1>Sign Up</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Username
//                     <input 
//                         type="text"
//                         name="username"
//                         value={signupCredentials.username}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     Password
//                     <input 
//                         type="password"
//                         name="password"
//                         value={signupCredentials.password}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     Phone Number
//                     <input 
//                         type="tel"
//                         name="phone_number"
//                         value={signupCredentials.phone_number}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <button>Sign Up</button>
//             </form>
//         </div>
//     );
// }
 
// export default Signup;