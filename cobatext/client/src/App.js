import React, { Component } from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import Class from "./pages/Class";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import axios from "axios";

class App extends Component {
  state = {
    username: "",
    password: "",
    auth: {
      userId: "",
      username: "",
      isAuthenticated: false
    }
  };

  componentWillMount() {
    axios.get("/auth/isAuthenticated").then(result => {
      const { userId, isAuthenticated, username } = result.data;
      this.setState({
        auth: {
          userId,
          isAuthenticated,
          username
        }
      });
    });
  }

  handleChange = event => {
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({
      username: "",
      password: ""
    });
    const { name } = event.target;
    axios.post(name, newUser).then(data => {
      if (data.data.isAuthenticated) {
        const { userId, isAuthenticated, username } = data.data;
        this.setState({
          auth: {
            userId,
            isAuthenticated,
            username
          }
        });
      }
    });
  };

  handleLogout = event => {
    event.preventDefault();
    axios.get("/auth/logout").then(result => {
      this.setState({
        auth: {
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
    });
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Landing />;
              }}
            />
            <Route
              exact
              path="/search"
              render={() => {
                if (loggedIn) {
                  return <Search />;
                } else {
                  return (
                    <SignUp
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                      email={this.state.email}
                      password={this.state.password}
                    />
                  );
                }
              }}
            />
            <Route
              exact
              path="/signin"
              render={() => {
                if (loggedIn) {
                  return <Redirect to="/search" />;
                } else {
                  return (
                    <SignIn
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                      email={this.state.email}
                      password={this.state.password}
                    />
                  );
                }
              }}
            />
            <Route
              exact
              path="/signup"
              render={() => {
                if (loggedIn) {
                  return <Redirect to="/search" />;
                } else {
                  return (
                    <SignUp
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                      email={this.state.email}
                      password={this.state.password}
                    />
                  );
                }
              }}
            />
            <Route exact path="/search/class/:id" render={(props)=> {
              if(loggedIn) {
                return <Class {...props}/>
              }else {
                return (
                  <SignUp
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                      email={this.state.email}
                      password={this.state.password}
                    />
                )
              }
            }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
