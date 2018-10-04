import React from "react";
import "./SectionTwo.css";

export const SectionTwo = () => {
  return (
    <div className="section">
      <div className="about">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#firstPage">
                Search
              </a>
            </li>
            <li className="nav-item active">
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

        <div className="slide">
          <div className="shell">
            <div className='shell-header'>
              <h2 className='about-header'>How You Benefit</h2>
            </div>
            <div className='shell-body'>
              <p>Text text text text text text text text text</p>
            </div>
          </div>
        </div>

        <div className="slide"> Slide 2 </div>
        <div className="slide"> Slide 3 </div>
      </div>
    </div>
  );
};
