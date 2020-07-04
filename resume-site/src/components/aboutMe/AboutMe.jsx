import React from "react";

import Section from "../section/Section";
import SocialLinks from "../socialLinks/SocialLinks";
import IncreasingBtn from "../increasingBtn/IncreasingBtn";
import ContactsCard from "./contactsCard/ContactsCard";

import "./aboutMe.scss";

const AboutMe = () => {
  return (
    <Section id="aboutMe" number="01" title="About Me" gray={true}>
      <div className="aboutMe">
        <div className="aboutMe__info">
          <p className="aboutMe__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, consectetur culpa, cupiditate explicabo ipsum nobis
            officia omnis pariatur quos rerum saepe sed. Aliquid culpa cum
            distinctio obcaecati officiis quaerat quas.
          </p>
          <div className="aboutMe__socialLinks">
            <SocialLinks size="20" />
          </div>
          <a href='#' download="summary Andrei Dergavko">
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
