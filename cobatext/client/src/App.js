import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Search from "./pages/Search";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </div>
  </Router>
);

export default App;
