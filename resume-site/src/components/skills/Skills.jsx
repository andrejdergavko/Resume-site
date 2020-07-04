import React from "react";

import Section from "../section/Section";
import ProgressBar from "./progressBar/ProgressBar";

import "./skills.scss";

const Skills = () => {
  return (
    <Section id="skills" number="03" title="Skills" gray={true}>
      <div className="skills__wrapper">
        <div className="skills__column">
          <ProgressBar title="JavaScript" value="90" />
          <ProgressBar title="React.js" value="75" />
          <ProgressBar title="HTML / CSS" value="95" />
        </div>
        <div className="skills__column">
          <ProgressBar title="Redux" value="75" />
          <ProgressBar title="Jest / Enzyme" value="50" />
          <ProgressBar title="GraphQL" value="50" />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
