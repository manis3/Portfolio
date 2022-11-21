import React from "react";
import "./contactme.css";
// import Header from "../Home/Header";
import Contactmeform from "./Contactme-form";

export default function Contactme() {
  return (
    <div className="contactme-container">
      {/* <Header /> */}
      <div className="contactme-title">
        <h1>Contact Me</h1>
        <p className="contactme-title-paragraph">Lets keep in Touch</p>
      </div>
      <div className="contactme-parent">
        <div className="contactme-left-flex">
          <div className="contactme-getintouch">
            <h1>Get In Touch 💌|</h1>
            <div className="footer-colz">
              <div className="footer-colz-icon">
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
          </div>
          <div className="contactme-getintouch-image">
            <p>Send your Email Here</p>
            <img
              src={require("../../assets/Home/mailz.jpeg")}
              alt="display value"
            />
          </div>
        </div>
        <div className="contactme-right-flex">
          <Contactmeform />
        </div>
      </div>
    </div>
  );
}
