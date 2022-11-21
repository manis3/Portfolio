import React from "react";
import "./footer.css";

export default function footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={require("../../../assets/Home/shape-bg.png")}
          alt="no Internet Connection"
        />
        <div className="footer-logo"></div>
      </div>
    </div>
  );
}
