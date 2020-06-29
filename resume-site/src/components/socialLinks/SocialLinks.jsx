import React from "react";

import "./socialLinks.scss";

import InstagramSwg from "../../icons/InstagramSwg";
import LinkedinSwg from "../../icons/LinkedinSwg";
import TelegramSwg from "../../icons/TelegramSwg";
import VkSwg from "../../icons/VkSwg";

const SocialLinks = ({ size }) => {
  return (
    <ul className="socialLinks">
      <li className="socialLinks__item">
        <a className="socialLinks__link" href="#">
          <LinkedinSwg size={size} />
        </a>
      </li>
      <li className="socialLinks__item">
        <a className="socialLinks__link" href="#">
          <InstagramSwg size={size} />
        </a>
      </li>
      <li className="socialLinks__item">
        <a className="socialLinks__link" href="#">
          <TelegramSwg size={size} />
        </a>
      </li>
      <li className="socialLinks__item">
        <a className="socialLinks__link" href="#">
          <VkSwg size={size} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
