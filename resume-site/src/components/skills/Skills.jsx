import React from "react";

import Section from "../section/Section";
import ProgressBar from "./progressBar/ProgressBar";

import "./skills.scss";

const Skills = () => {
  return (
    <Section id="skills" number="03" title="Skills" gray={true}>
      <div className="skills__wrapper">
        <div className="skills__column">
          <ProgressBar title="Html" value="90" />
          <ProgressBar title="Html" value="90" />
          <ProgressBar title="Html" value="90" />
        </div>
        <div className="skills__column">
          <ProgressBar title="Html" value="90" />
          <ProgressBar title="Html" value="90" />
          <ProgressBar title="Html" value="90" />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
