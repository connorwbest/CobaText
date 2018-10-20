import React from "react";
import "./SectionOne.css";
import {Link} from 'react-router-dom';

export const SectionOne = () => {
  return (
    <div className="section">
      <div className="start">
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
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
            {/* <li className="nav-item">
              <a className="nav-link" href="#thirdPage">
                Promo
              </a>
            </li> */}
          </ul>
          <li className="nav-item active text-align-right">
              <a className="nav-link brand">
                COBA<span className='title-span'>TEXT</span>
              </a>
            </li>
        </nav>
        
          <h1 className='slogan'><span className='slogan-span'>Pass</span> Classes. <span className="slogan-span">Save</span> Money.</h1>
        
        <Link to = "/search"><button className="btn btn-warning btn-lg" href='/search'>Start</button></Link>
      </div>
    </div>
  );
};
