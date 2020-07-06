import React from "react";
import itAcademy from "../img/itAcademy.png";

const ItAcademyJpg = ({ size }) => {
  return (
    <img
      style={{ width: `${size}px`, height: `${size}px` }}
      src={itAcademy}
      alt="itAcademy icon"
    />
  );
};

export default ItAcademyJpg;
