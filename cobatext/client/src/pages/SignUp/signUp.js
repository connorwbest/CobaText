import React from "react";
import { Link } from "react-router-dom";
import "./signUp.css";

const SignUp = props => {
  return (
      <div className="signUp">
        <h1 className="signUp-head">SIGN UP</h1>
        <Link to="/signin">
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
              placeholder="example@email.com"
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
  );
};

export default SignUp;
