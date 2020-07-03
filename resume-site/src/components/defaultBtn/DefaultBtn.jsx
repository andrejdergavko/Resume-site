import React from "react";
import "./defaultBtn.scss";

const DefaultBtn = ({ children, fill }) => {
  return (
    <button className={`defaultBtn ${fill ? "defaultBtn_fill" : ""}`}>
      {children}
    </button>
  );
};

export default DefaultBtn;
