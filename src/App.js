import "./App.css";
import { useState } from "react";
import Home from "./portfolioContainer/Home/Home";
import About from "./portfolioContainer/aboutMe/About";
import Myservices from "./portfolioContainer/myservices/Myservices";
import Contactme from "./portfolioContainer/Footer/Contactme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Resume from "./portfolioContainer/Resume/Resume";
// import Header from "./portfolioContainer/Header/Header";

const text = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,  iusto laboriosam. Sed laudantium aspernatur itaque? Quasi  reprehenderit distinctio accusantium, natus ut tempora vel numquam repellendus. Dignissimos ratione nobis labore expedita. Lorem  ipsum dolor sit amet consectetur adipisicing elit. Quos corporis  asperiores, deserunt vitae eum eaque ex temporibus illo laboriosam. Nostrum amet possimus est rem aspernatur laborum rerum vero deleniti nesciunt.",
};

function App() {
  //////////////////////////About section useState//////////////////
  const [abouttext, setAbouttext] = useState("true");
  const aboutmetext = () => {
    if (abouttext === "true") {
      setAbouttext("false");
    } else {
      setAbouttext("true");
    }
  };

  ///////////////////////////////////////Resume section useState////////////////

  // const [resume, setresume] = useState(true);
  // const resumeDescription = (flag) => {};

  //////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="App">
      {/* <Home />
      <About
        text={
          abouttext === "true"
            ? text.description.slice(0, 299)
            : text.description
        }
        buttonvalue={abouttext === "true" ? "Read More" : "View Less"}
        aboutmetext={aboutmetext}
      />
      <Myservices />
      <Contactme /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/about"
            exact
            element={
              <About
                text={
                  abouttext === "true"
                    ? text.description.slice(0, 299)
                    : text.description
                }
                buttonvalue={abouttext === "true" ? "Read More" : "View Less"}
                aboutmetext={aboutmetext}
              />
            }
          />
          <Route exact path="/myservices" element={<Myservices />} />
          <Route exact path="/Contactme" element={<Contactme />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
