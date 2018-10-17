import React from "react";
import "./SectionOne.css";
import {Link} from 'react-router-dom';

export const SectionOne = () => {
  return (
    <div className="section">
      <div className="start">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#firstPage">
                Start
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
        <h1 className='site-heading'>
          <span className='title-span'>Pass</span> Classes. <span className="title-span">Save</span> Money.
        </h1>
        <Link to = "/search"><button className="btn btn-warning btn-lg" href='/search'>Start</button></Link>
      </div>
    </div>
  );
};
