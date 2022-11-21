import React from "react";
import "./myservices.css";
import Header from "../Home/Header";

export default function Myservices(props) {
  return (
    <div className="myservices-container">
      <Header />
      <div className="myservices-title">
        <h1>My Services</h1>
      </div>
      <div className="myservices-parent">
        <div className="myservices-content-flexbox">
          <div className="myservices-first-flexbox-profile-picture">
            <div className="myservices-first-flexbox-image"></div>
          </div>
          <div className="myservices-content">
            <h3>FrontEnd Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              perferendis perspiciatis repellat tempora maiores accusantium? At
              minus vel tenetur repellendus.
            </p>
          </div>
        </div>
        <div className="myservices-content-flexbox">
          <div className="myservices-first-flexbox-profile-picture">
            <div className="myservices-first-flexbox-image0"></div>
          </div>
          <div className="myservices-content">
            <h3>FrontStack Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              perferendis perspiciatis repellat tempora maiores accusantium? At
              minus vel tenetur repellendus.
            </p>
          </div>
        </div>
        <div className="myservices-content-flexbox">
          <div className="myservices-first-flexbox-profile-picture">
            <div className="myservices-first-flexbox-image1"></div>
          </div>
          <div className="myservices-content">
            <h3>Ui/Ux Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              perferendis perspiciatis repellat tempora maiores accusantium? At
              minus vel tenetur repellendus.
            </p>
          </div>
        </div>
        <div className="myservices-content-flexbox">
          <div className="myservices-first-flexbox-profile-picture">
            <div className="myservices-first-flexbox-image2"></div>
          </div>
          <div className="myservices-content">
            <h3>Logo Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              perferendis perspiciatis repellat tempora maiores accusantium? At
              minus vel tenetur repellendus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
