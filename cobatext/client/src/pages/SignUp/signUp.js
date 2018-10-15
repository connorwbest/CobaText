import React, { Component } from "react";
import { Input, FormBtn } from "../../components/SearchForm";
import { Container } from "../../components/Grid";
import API from "../../utils/API";

class SignUp extends Component {
  state = {
    username: "",
    password: ""
  };

  // Captures input changes on the SignUp form
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("sign-up form, username:");
    console.log(this.state.username);
    API.signUp({username: this.state.username, password: this.state.password})
    .then(res => {
        console.log('login response:')
        console.log(res)
        if(res.status === 200) {
            // update App.js state
            this.props.updateUser({
                loggedIn: true,
                username: res.data.username
            })
            this.setState({
                reDirectTo: '/'
            })
        } else {
            console.log('Sign-up error')
        }
    })
    .catch(error => {
        console.log('sign-up server error')
        console.log(error)
    })
  };

  render() {
    return (
      <Container>
        <div>
          <form>
            <label>Email</label>
            <Input
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
            />
            <label>Password</label>
            <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
            />
            <FormBtn onClick={this.handleSubmit}>Submit</FormBtn>
          </form>
        </div>
      </Container>
    );
  }
}

export default SignUp;
