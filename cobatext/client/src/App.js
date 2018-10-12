import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import Class from './pages/Class';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/search" component={Search} />
        <Route exact path='/search/class/:id' component={Class} />
      </Switch>
    </div>
  </Router>
);

export default App;
