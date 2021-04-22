import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Plants from './components/Plants/Plants';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/plants">
          <Plants />
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
