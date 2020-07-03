import React from "react";
import "./preview.scss";

import IncreasingBtn from "../increasingBtn/IncreasingBtn";

const Preview = () => {
  return (
    <div className="preview">
      <div className="wrapper preview__wrapper">
        <div>
          <h1 className="preview__name">Andrei Dergavko</h1>
          <h3 className="preview__position">Junior Frontend developer</h3>
          <a href="#aboutMe">
            <IncreasingBtn title="About Me" />
          </a>
        </div>
        <img
          className="preview__foto"
          src="http://laaris.com/resume-1-0/man3.png"
        />
      </div>
    </div>
  );
};

export default Preview;
