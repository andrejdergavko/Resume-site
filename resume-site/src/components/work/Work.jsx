import React from "react";

import Section from "../section/Section";
import PortfolioItem from "./portfolioItem/PortfolioItem";

import projectImg1 from "../../img/projectImg1.jpg";
import projectImg2 from "../../img/projectImg2.jpg";
import projectImg3 from "../../img/projectImg3.jpg";
import projectImg4 from "../../img/projectImg4.jpg";

import "./Work.scss";

const data = [
  {
    title: "Medical center website",
    text: "Final project of the HTML / CSS course.",
    supText: "Technology: Html, CSS, Less, Grid, Flex-box",
    imgUrl: projectImg1,
    gitHubUrl: "https://github.com/andrejdergavko/Project-html-css",
    projectUrl: "https://project-html-css.now.sh/",
  },
  {
    title: "Body weight diary",
    text: "Final project of the JS course. This project written using only native js.",
    supText: "Technology: JavaScript, Webpack ",
    imgUrl: projectImg3,
    gitHubUrl: "https://github.com/andrejdergavko/Project-js",
    projectUrl: "https://project-js.vercel.app/",
  },
  {
    title: "Money Manager",
    text: "Final project of the React.JS course. This project has a server part that is located on a cloud server and interact using Fetch API.",
    supText:
      "Technology: JavaScript, React.js, Redux, Redux-thunk, Hooks, React-router, AJAX, Fetch API",
    imgUrl: projectImg2,
    gitHubUrl: "https://github.com/andrejdergavko/Project-react",
    projectUrl: "https://project-react-liard.vercel.app/",
  },
  {
    title: "Project for practice GraphQL, Flow and Jest/Enzyme",
    text:
      "Actually these are two applications. On the client and server side. They interact using GraphQL. All the style was written using the Base Web style library.",
    supText:
      "Technology: JavaScript, GraphQL, Jest, Enzyme, Flow, React.js, Hooks, React-router",
    imgUrl: projectImg4,
    gitHubUrl: "https://github.com/andrejdergavko/Test-production-project",
    projectUrl: "https://test-production-project.vercel.app/",
  },
];

const Work = () => {
  return (
    <Section id="portfolio" number="05" title="Portfolio" gray={true}>
      <div className="work">
        {data.map((item) => {
          return <PortfolioItem data={item} />;
        })}
      </div>
    </Section>
  );
};

export default Work;
