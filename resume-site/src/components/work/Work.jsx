import React from "react";

import Section from "../section/Section";
import PortfolioItem from "./portfolioItem/PortfolioItem";

import projectImg1 from "../../img/projectImg1.jpg";
import projectImg2 from "../../img/projectImg2.jpg";
import projectImg3 from "../../img/projectImg3.jpg";

import "./Work.scss";

const data = [
  {
    title: "Medical center website",
    text:
      "The project is a multi-page website",
    supText: "Technology: Html, CSS, Less, Grid, Flex-box",
    imgUrl: projectImg1,
  },
  {
    title: "Body weight diary",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est numquam cumque, aliquid aspernatur debitis inventore assumenda. Laudantium, deleniti",
    supText: "Technology: JavaScript, Webpack ",
    imgUrl: projectImg3,
  },
  {
    title: "Money Manager",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est numquam cumque, aliquid aspernatur debitis inventore assumenda. Laudantium, deleniti",
    supText: "Technology: React.js, Redux, Redux-thunk, Hooks, React-router, AJAX, Fetch API ",
    imgUrl: projectImg2,
  },
];

const Work = () => {
  return (
    <Section number="05" title="Portfolio" gray={true}>
      <div className="work">
        {data.map((item) => {
          return <PortfolioItem data={item} />;
        })}
      </div>
    </Section>
  );
};

export default Work;
