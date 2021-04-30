import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Plants from "./components/Plants/Plants";
import CreatePlant from "./components/CreatePlant/CreatePlant";
import EditPlant from "./components/EditPlant/EditPlant";
import ProtectedRoute from "./utils/ProtectedRoute";
import Profile from "./components/EditProfile/Profile";
import Footer from "./components/Footer/Footer";

import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";

function App(props) {
	return (
		<div className="App">
			{props.fetchError && <Alert severity="error">{props.fetchError}</Alert>}
			<Switch>
				<ProtectedRoute exact path="/plants" component={Plants} />
				<ProtectedRoute path="/plants/:id/edit" component={EditPlant} />
				<ProtectedRoute path="/plants/create" component={CreatePlant} />
				<ProtectedRoute path="/profile" component={Profile} />
				<Route path="/signup">
					<Signup />
				</Route>
				<Route exact path="/">
					<Login />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	fetchError: state.fetchError,
});

export default connect(mapStateToProps, {})(App);
