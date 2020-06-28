import React from "react";
import "./increasingBtn.scss";

const IncreasingBtn = ({ title }) => {
  return (
    <button className="increasingBtn">
      {title}
    </button>
  );
};

export default IncreasingBtn;
