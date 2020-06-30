import React from "react";
import Header from "./components/header/Header";
import Preview from "./components/preview/Preview";
import AboutMe from "./components/aboutMe/AboutMe";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";

import "./style/common.scss";

function App() {
  return (
    <div>
      <Header />
      <Preview />
      <AboutMe />
      <Education />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
