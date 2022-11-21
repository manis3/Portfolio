import React from "react";
import Profile from "./Profile";
import Footer from "./footer/Footer";
import "./Home.css";
import { useState } from "react";
import HomeAbout from "../aboutMe/HomeAbout";
import Homecontactme from "../Footer/Homecontactme";
import Homemyservices from "../myservices/Homemyservices";


const text = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,  iusto laboriosam. Sed laudantium aspernatur itaque? Quasi  reprehenderit distinctio accusantium, natus ut tempora vel numquam repellendus. Dignissimos ratione nobis labore expedita. Lorem  ipsum dolor sit amet consectetur adipisicing elit. Quos corporis  asperiores, deserunt vitae eum eaque ex temporibus illo laboriosam. Nostrum amet possimus est rem aspernatur laborum rerum vero deleniti nesciunt.",
};


export default function Home(props) {


  const [abouttext, setAbouttext] = useState("true");
  const aboutmetext = () => {
    if (abouttext === "true") {
      setAbouttext("false");
    } else {
      setAbouttext("true");
    }
  };


  return (
    <div className="home-container">
      <Profile />
      <Footer />
      <HomeAbout text={
        abouttext === "true"
          ? text.description.slice(0, 299)
          : text.description
      }
        buttonvalue={abouttext === "true" ? "Read More" : "View Less"}
        aboutmetext={aboutmetext} />
      <Homemyservices />
      <Homecontactme />
    </div>
  );
}
