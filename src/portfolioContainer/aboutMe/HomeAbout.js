import React from "react";
// import Header from "../Home/Header.js";
import "./about.css";
export default function About(props) {
  return (
    <div className="about-container">
      {/* <Header /> */}
      <div className="about-me-title">
        {" "}
        <h1 className="title">
          <strong>About Me</strong>{" "}
        </h1>
        <p className="about-me-p">Why choose me?</p>
      </div>
      <div className="about-container-child">
        <div className="about-parent">
          <div className="about-parent-child">
            <div className="about-image">
              <div className="about-image-background"></div>
            </div>

            <div className="about-me-content ">
              <div>
                <h2>
                  <span className="text">Full Stack Developer &</span>
                  <span className="highlighted-text"> Designer 💻</span>
                </h2>
              </div>
              <div>
                <span className="text">Hi!,I am</span>
                <span className="highlighted-text"> Manish</span>
              </div>
              <div>
                <p className="content-about-me">{props.text}</p>
                <button
                  className="btn highlighted-btn"
                  onClick={props.aboutmetext}
                >
                  {props.buttonvalue}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
