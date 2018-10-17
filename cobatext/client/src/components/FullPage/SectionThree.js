import React from "react";
import "./SectionThree.css";


export const SectionThree = () => {
  return (
    <div className="section">
      <div className="promo">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#firstPage">
                Start
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#secondPage">
                About
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#thirdPage">
                Promo
              </a>
            </li>
          </ul>
        </nav>

        <div className="shell">
          <div className="shell-header">
            <h2 className="promo-header">We'll Pay for Your Input!</h2>
          </div>
          <div className="shell-body">
            <p>Text text text text text text text text text</p>
          </div>
        </div>
      </div>
    </div>
  );
};
