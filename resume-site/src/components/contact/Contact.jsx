import React from "react";

import Section from "../section/Section";
import SocialLinks from "../socialLinks/SocialLinks";

import "./contact.scss";

const Contact = () => {
  return (
    <Section id="contact" number="06" title="Contact" gray={false}>
      <div className="contact">
        <div className="contact__phone">+375 (33) 3214403</div>
        <div className="contact__email">andrejdergavko@gmail.com</div>
        <SocialLinks size="30" />
      </div>
    </Section>
  );
};

export default Contact;
