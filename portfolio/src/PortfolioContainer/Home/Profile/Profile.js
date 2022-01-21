import React from "react";
import Typical from 'react-typical'
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService"

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/mkleincreative/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
            <div className="colz-icon">
              <a href="https://www.github.com/mKleinCreative">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
            <div className="colz-icon">
              <a href="https://twitter.com/miketheklein">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Michael</span>
            </span>
          </div>
        <div className="profile-details-role">
          <span className="primary-text">
            <h1>
              {" "}
              <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic Dev ☕️",
                  1000,
                  "Full Stack Developer 💻",
                  1000,
                  "MERN Stack Dev 😎",
                  1000,
                  "Voracious Learner 👨🏻‍🎓",
                  1000,
                  "React Developer 👨🏻‍🎨",
                  1000,
                ]}
              />
            </h1>
            <span className="profile-role-tagline">
              I have a knack for solving all your web application based problems.
            </span>
          </span>
        </div>
        <div className="profile-options">
          <button 
            className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
          >
            Hire me
          </button>
          <a
            href="Michael Klein Resume.pdf"
            download="Michael_Klein_Resume.pdf"
          >
            <button className="btn highlighted-btn">Get Resume</button>
          </a>
        </div>
        </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
      </div>
    </div>
  );
}
