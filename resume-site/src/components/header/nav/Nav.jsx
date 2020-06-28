import React from "react";
import "./nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#">
            About me
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            Education
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            Work
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            Experience
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
