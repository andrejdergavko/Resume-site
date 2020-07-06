import React from "react";

import Section from "../section/Section";
import ProgressBar from "./progressBar/ProgressBar";

import "./skills.scss";

const Skills = () => {
  return (
    <Section id="skills" number="03" title="Skills" gray={true}>
      <div className="skills__wrapper">
        <div className="skills__column">
          {/* <ProgressBar title="JavaScript" value="90" />
          <ProgressBar title="React.js" value="75" />
          <ProgressBar title="HTML / CSS" value="95" /> */}
          <ul>
            <li><span>JavaScript</span></li>
            <li><span>React.js, Hooks, React-router</span></li>
            <li><span>Redux, Redux-thunk</span></li>
            <li><span>GraphQL</span></li>
            <li><span>Jest / Enzyme</span></li>
            <li><span>Flow</span></li>
          </ul>
        </div>
        <div className="skills__column">
          {/* <ProgressBar title="Redux" value="75" />
          <ProgressBar title="Jest / Enzyme" value="50" />
          <ProgressBar title="GraphQL" value="50" /> */}
          <ul>
            <li><span>HTML5, CSS3, Sass, Less</span></li>
            <li><span>Bootstrap, Grid, Flex-box</span></li>
            <li><span>AJAX, Fetch API</span></li>
            <li><span>Git</span></li>
            <li><span>Webpack</span></li>
            <li><span>БЭМ</span></li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
