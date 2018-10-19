import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import "./signIn.css";

const SignIn = props => {
  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #000000" }} />
	  <h1 className='signIn-title'>COBA <span className='title-span'>TEXT</span></h1>
      <div className="signIn">
        <h1 className="signIn-head">SIGN IN</h1>
        <Link style={{ textDecoration: "none" }} to="/signup"><p className="signIn-link">Go to sign up</p></Link>
        <form>
          <label className="signIn-label">Email</label>
          <div className="form-group-signIn">
          <input
            className="form-control"
            value={props.username}
            onChange={props.handleChange}
            name="username"
            type="email"
          />
          </div>
          <label className="signIn-label">Password</label>
          <div className="form-group-signIn">
          <input
            className="form-control"
            name="password"
            type="password"
            value={props.password}
            onChange={props.handleChange}
          />
          </div>
          <button
            className="signIn-btn"
            type="submit"
            name="/auth/signin"
            onClick={props.handleSubmit}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
