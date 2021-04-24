import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Plants from "./components/Plants/Plants";
import CreatePlant from './components/CreatePlant/CreatePlant';
import EditProfile from './components/EditProfile/EditProfile';
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute exact path="/plants">
          <Plants />
        </ProtectedRoute>
        <ProtectedRoute path='/plants/:id/edit'>
          {/* <EditPlant /> */}
        </ProtectedRoute>
        <ProtectedRoute exact path='/profile'>
          {/* <EditProfile /> */}
        </ProtectedRoute>
        <ProtectedRoute path="/plants/create">
          <CreatePlant />
        </ProtectedRoute>
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
