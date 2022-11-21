import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-parent">
        <div className="header-parent-left">
          <Link className="header-parent-left-link" to="/">
            Portfolio
          </Link>
        </div>
        <div className="header-right">
          <div className="header-parent-right">
            <Link className="header-parent-right-link" to="/">
              Home
            </Link>
            <Link className="header-parent-right-link" to="/About">
              About
            </Link>
            <Link className="header-parent-right-link" to="!#">
              Resume
            </Link>
            <Link className="header-parent-right-link" to="/Myservices">
              My services
            </Link>
            <Link className="header-parent-right-link" to="/Contactme">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
