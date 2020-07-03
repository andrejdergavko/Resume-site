import React from "react";
import "./nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#aboutMe">
            About me
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#education">
            Education
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#skills">
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#experience">
            Experience
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
