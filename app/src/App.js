import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Plants from "./components/Plants/Plants";
import CreatePlant from "./components/CreatePlant/CreatePlant";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
	return (
		<div className="App">
			<Switch>
				<ProtectedRoute exact path="/plants">
					<Plants />
				</ProtectedRoute>
				<Route path="/plants/create">
					<CreatePlant />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route>
				<Route exact path="/">
					<Login />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
