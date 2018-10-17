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
                Start
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
            <div className="shell-header">
              <h2 className="about-header">How You Benefit</h2>
            </div>
            <div className="shell-body">
              <p className="about-description">
                We all know how expensive textbooks can be. The average student
                spends over $60 on class materials per a course. Over the length
                of a standard bachelor's degree this can add up to thousands!
                CobaText allows students to find those courses and professors
                who save them some money and lessen the financial debt that most
                of us face after graduation. We have all taken classes where we
                purchased the required textbook and used it as a decoration on
                our desk for the next four months, CobaText wants to end this!
                Instead of hoping that your friend who took the class before is
                right when he says "You don't need to buy the textbook", now you
                can confirm it, put your mind at ease and save some money.
              </p>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="shell">
            <div className="shell-header">
              <h2 className="about-header">How it Works</h2>
                  <p className="about-description"><span className="list-span">1.</span> Sign up with a valid UCF knights email address.</p>
                  <p className="about-description"><span className="list-span">2.</span> Search for all classes by major (MAR, FIN, etc.) or a specific class by its major and class number (MAR 3023).</p>
                  <p className="about-description"><span className="list-span">3.</span> Get a snapshot of how many people bought the textbook/didn't, how those students did and how often those who purchased used the textbook. 
                    You also get to see individual reviews to get a better feel for if you need to buy the textbook for that course or can skip out and save $.
                  </p>
                  <p className="about-description"><span className="list-span">4.</span> Leave your own review for classes you've taken to improve the accuracy of ratings and help your fellow classmates!</p>
            </div>
            <div className="shell-body">
              
            </div>
          </div>
        </div>
        <div className="slide"> Slide 3 </div>
      </div>
    </div>
  );
};
