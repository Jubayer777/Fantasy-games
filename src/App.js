// imported file list;
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import LeagueDetail from './Components/LeagueDetail/LeagueDetail';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {
  return (
    <div className="App">
        {/* setting route path */}
        <Router>
            <Switch>
                  <Route path="/home">
                      <Home/>
                  </Route>
                  <Route path="/league/:leagueId">
                      <LeagueDetail/>
                  </Route>
                  <Route exact path="/">
                      <Home/>
                  </Route>
                  <Route path="*">
                      <NoMatch/>
                  </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
