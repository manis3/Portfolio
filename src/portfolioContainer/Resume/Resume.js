import React from "react";
import { useState } from "react";
import "./Resume.css";
import education from "../../assets/Home/education.svg";
import workhistory from "../../assets/Home/work-history.svg";
import programmingskills from "../../assets/Home/programming-skills.svg";
import projects from "../../assets/Home/projects.svg";
import interests from "../../assets/Home/interests.svg";

import Eductation from "./Eductation";

export default function Resume() {
  const [resume, setResume] = useState("Eductation");
  // const displayData = () => {
  //   if (resume === "Eductation") {
  //     <Eductation />;
  //     // setResume("Eductation");
  //   } else if (resume === "Work History") {
  //     console.log(resume);
  //   } else if (resume === "Programming") {
  //     console.log("programming Skills");
  //   } else if (resume === "projects") {
  //     console.log("projects");
  //   } else {
  //     console.log("Interest");
  //   }
  // };
  // useEffect(() => {
  //   if (resume === "Eductation") {
  //     console.log(resume);
  //     // setResume("Eductation");
  //   } else if (resume === "Work History") {
  //     console.log(resume);
  //   } else if (resume === "Programming") {
  //     console.log("programming Skills");
  //   } else if (resume === "projects") {
  //     console.log("projects");
  //   } else {
  //     console.log("Interest");
  //   }
  // }, []);

  return (
    <div className="resume-container">
      <div className="resume-title">
        <h1>Resume</h1>
      </div>
      <div className="resume-parent">
        <div className="resume-left-flex-box">
          <div className="resume-left-child">
            <div className="resume-svgImage">
              <a href="!#">
                <img src={education} alt="education" />
              </a>
              <br />
              <a href="!#">
                {" "}
                <img src={workhistory} alt="workhistory" />
              </a>
              <br />
              <a href="!#">
                {" "}
                <img src={programmingskills} alt="programmingskills" />
              </a>
              <br />
              <a href="!#">
                {" "}
                <img src={projects} alt="projects" />
              </a>
              <br />
              <a href="!#">
                {" "}
                <img src={interests} alt="interests" />
              </a>
              <br />
            </div>
          </div>
          <div className="resume-text-anchortag">
            <buttom
              className="highlight-btn"
              onClick={() => {
                setResume("Eductation");
                // displayData();
              }}
              style={{ marginTop: 50 }}
            >
              Eductation
            </buttom>

            <br />

            <buttom
              className="highlight-btn"
              onClick={() => {
                setResume("Work History");
                // displayData();
              }}
            >
              Work History
            </buttom>

            <br />

            <buttom
              className="highlight-btn"
              onClick={() => {
                setResume("Programming");
                // displayData();
              }}
            >
              Programming Skills
            </buttom>

            <br />

            <buttom
              className="highlight-btn"
              onClick={() => {
                setResume("projects");
                // displayData();
              }}
            >
              Projects
            </buttom>

            <br />

            <buttom
              className="highlight-btn"
              onClick={() => {
                setResume("Interest");
                // displayData();
              }}
            >
              Intrests
            </buttom>
          </div>
        </div>
        <div className="resume-right-flex-box">
          <h1>{resume === "Eductation" ? <Eductation /> : "Error"}</h1>
        </div>
      </div>
    </div>
  );
}
