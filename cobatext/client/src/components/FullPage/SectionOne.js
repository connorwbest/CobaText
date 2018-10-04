import React from "react";
import "./SectionOne.css";

export const SectionOne = () => {
  return (
    <div className="section">
      <div className="start">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#firstPage">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#secondPage">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#thirdPage">
                Promo
              </a>
            </li>
          </ul>
        </nav>
        <h1>
          <span>Pass</span> Classes. <span>Save</span> Money.
        </h1>
        <button className="btn btn-warning btn-lg">Start</button>
      </div>
    </div>
  );
};
