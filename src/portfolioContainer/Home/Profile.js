import React from "react";
import { Link } from "react-router-dom";
// import About from "../aboutMe/About";
// import Myservices from "../myservices/Myservices";
// import Contactme from "../Footer/Contactme";

import Typical from "react-typical";
import "./profile.css";
import "./header.css";
import Header from "./Header.js";
export default function Profile(props) {
  return (
    <div>
      <Header activeabout={props.activeabout} />

      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="https://www.facebook.com/manish.hyongoju.1/">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://mail.google.com/mail/u/2/#inbox">
                  <i className="fa fa-google-plus-square"></i>
                </a>
                <a href="https://www.instagram.com/maneeshyongoju/">
                  <i className="fa fa-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/manish-hyongoju-13a352230/">
                  <i className="fa fa-linkedin-square"></i>
                </a>
                <a href="https://github.com/manis3">
                  <i className="fa fa-github-square"></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'm
                <span className="highlighted-text"> Manish</span>
              </span>
            </div>
            <div className="  profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Website Developer 🔴",
                      1000,
                      "FullStack Developer  👨🏻‍💻 ",
                      1000,
                      "MernStack Developer 🤟🏾",
                      1000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  Knack of building application with front and back end
                  operations.
                </span>
              </span>
            </div>
            <div className="profile-options">
              <Link className="btn primary-btn" to="/Contactme">
                Hire Me
              </Link>
              <a
                href="Manish_Hyongoju_Resume.pdf"
                download="Manish_Hyongoju_Resume.pdf"
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
      {/* <About />
      <Myservices />
      <Contactme /> */}
    </div>
  );
}
