import React from "react";

import Section from "../section/Section";
import SocialLinks from "../socialLinks/SocialLinks";
import IncreasingBtn from "../increasingBtn/IncreasingBtn";
import ContactsCard from "./contactsCard/ContactsCard";
import summary from "../../files/Andrei Dergavko summary.docx";

import "./aboutMe.scss";

const AboutMe = () => {
  return (
    <Section id="aboutMe" number="01" title="About Me" gray={true}>
      <div className="aboutMe">
        <div className="aboutMe__info">
          <p className="aboutMe__text">
            I love programming and really want to work. Purposeful, can organize
            myself, fast-learning, have technical mindset. My goal is the
            fastest growth in this sphere. I like sports, love nature.
          </p>
          <div className="aboutMe__socialLinks">
            <SocialLinks size="20" />
          </div>
          <a href={summary} download>
            <IncreasingBtn title="Download resume" />
          </a>
        </div>
        <div className="aboutMe__contacts-card">
          <ContactsCard />
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
