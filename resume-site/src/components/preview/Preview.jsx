import React from "react";
import "./preview.scss";

import faceFoto from '../../img/faceFoto.jpg';

import IncreasingBtn from "../increasingBtn/IncreasingBtn";

const Preview = () => {
  return (
    <div className="preview">
      <div className="wrapper preview__wrapper">
        <div>
          <h1 className="preview__name">Andrei Dergavko</h1>
          <h3 className="preview__position">Junior Frontend developer</h3>
          <a href="#portfolio">
            <IncreasingBtn title="My projects" />
          </a>
        </div>
        <img
          className="preview__foto"
          src={faceFoto}
        />
      </div>
    </div>
  );
};

export default Preview;
