import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import "./signUp.css";

const SignUp = props => {
  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #000000" }} />
	  <h1 className='signUp-title'>COBA <span className='title-span'>TEXT</span></h1>
      <div className="signUp">
        <h1 className="signUp-head">SIGN UP</h1>
        <Link style={{ textDecoration: "none" }} to="/signin">
          <p className="signUp-link">Go to sign in</p>
        </Link>
        <form className="signUp-form">
          <label className="signUp-label">Email</label>
          <div className="form-group-signUp">
            <input
              className="form-control"
              value={props.username}
              onChange={props.handleChange}
              name="username"
              type="email"
              placeholder="first.last@knights.ucf.edu"
            />
          </div>
          <label className="signUp-label">Password</label>
          <div className="form-group-signUp">
            <input
              className="form-control"
              name="password"
              type="password"
              value={props.password}
              onChange={props.handleChange}
            />
          </div>
          <button
            className="signUp-btn"
            type="submit"
            name="/auth/signup"
            onClick={props.handleSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
