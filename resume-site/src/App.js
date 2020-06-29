import React from "react";
import Header from "./components/header/Header";
import Preview from "./components/preview/Preview";
import AboutMe from "./components/aboutMe/AboutMe";

import "./style/common.scss";

function App() {
  return (
    <div>
      <Header />
      <Preview />
      <AboutMe />
    </div>
  );
}

export default App;
