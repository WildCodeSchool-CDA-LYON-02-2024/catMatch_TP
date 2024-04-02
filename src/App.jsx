import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LeaderboardPage from "./pages/LeaderboardPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/leaderboard" component={LeaderboardPage} />
      </Switch>
    </Router>
  );
}

export default App;
