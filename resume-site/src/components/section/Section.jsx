import React from "react";
import "./section.scss";

const Section = ({ title, number, gray, children, id }) => {
  return (
    <section id={id} className={`section ${gray ? "section_gray" : ""}`}>
      <div className="wrapper">
        <div className="section__header">
          <div className="section__number">{number}.</div>
          <div className="section__title">{title}</div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
