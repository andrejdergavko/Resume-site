import React from "react";
import "./header.scss";

import Nav from "./nav/Nav";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
