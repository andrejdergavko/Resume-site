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
        <a
          className="socialLinks__link"
          target="_blank"
          href="https://www.linkedin.com/in/andrei-dergavko-9008941a4/"
        >
          <LinkedinSwg size={size} />
        </a>
      </li>
      <li className="socialLinks__item">
        <a className="socialLinks__link" target="_blank" href="https://www.instagram.com/andreidergavko/?hl=ru">
          <InstagramSwg size={size} />
        </a>
      </li>
      <li className="socialLinks__item">
        <a className="socialLinks__link" target="_blank" href="https://t.me/andrejdergavko">
          <TelegramSwg size={size} />
        </a>
      </li>
      <li className="socialLinks__item">
        <a className="socialLinks__link" target="_blank" href="https://vk.com/andreidergavko">
          <VkSwg size={size} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
