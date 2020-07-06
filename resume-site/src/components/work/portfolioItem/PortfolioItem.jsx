import React from "react";

import DefaultBtn from "../../defaultBtn/DefaultBtn";
import GitHubSwg from "../../../icons/GitHubSwg";
import EyeSwg from "../../../icons/EyeSwg";

import "./portfolioItem.scss";

const PortfolioItem = ({
  data: { title, text, supText, imgUrl, gitHubUrl, projectUrl },
}) => {
  return (
    <div className="portfolioItem__section">
      <a target="_blank" href={projectUrl} className="portfolioItem__foto-box">
        <img className="portfolioItem__foto" src={imgUrl} alt="project scren" />
        <div className="portfolioItem__foto-bg">
          <EyeSwg size="60" />
          <div className="portfolioItem__foto-title">See the project</div>
        </div>
      </a>
      <div className="portfolioItem__description">
        <div>
          <h1 className="portfolioItem__title">{title}</h1>
          <p className="portfolioItem__suptext">{supText}</p>
          <p className="portfolioItem__text">{text}</p>
        </div>

        <div className="portfolioItem__btn-box">
          <a target="_blank" href={projectUrl}>
            <DefaultBtn fill={true}>
              <div className="portfolioItem__btn-icon">
                <EyeSwg />
              </div>
              See the project
            </DefaultBtn>
          </a>
          <a target="_blank" href={gitHubUrl}>
            <DefaultBtn>
              <div className="portfolioItem__btn-icon">
                <GitHubSwg />
              </div>
              Go to github
            </DefaultBtn>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
