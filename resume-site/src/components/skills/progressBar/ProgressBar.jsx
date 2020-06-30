import React from "react";

import LinearProgress from "@material-ui/core/LinearProgress";
import theme from "../../../style/materialUiSettings";

import "./progressBar.scss";

const ProgressBar = ({ title, value }) => {
  return (
    <div className="progressBar">
      <div className="progressBar__description">
        <div className="progressBar__title">{title}</div>
        <div className="progressBar__percent">{value}%</div>
      </div>
      <LinearProgress
        variant="determinate"
        theme={theme}
        color="secondary"
        value={+value}
      />
    </div>
  );
};

export default ProgressBar;
