import React from "react";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import Section from "../section/Section";

import "./experience.scss";

const Experience = () => {
  return (
    <Section id="experience" number="04" title="Experience" gray={false}>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="education__item-box">
              <h2 className="education__title">
                Educational Center (it-academy) of HTP{" "}
              </h2>
              <h4 className="education__sup-title">
                Project role: Front-end Developer / 01.20 - 03.20
              </h4>
              <p className="education__description">
                Finel project of the React.JS cours on the topic of a money
                Manager
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="education__item-box">
              <h2 className="education__title">
                Educational Center (it-academy) of HTP{" "}
              </h2>
              <h4 className="education__sup-title">
                Project role: Front-end Developer / 09.19 - 12.19
              </h4>
              <p className="education__description">
                Finel project of the JS cours on the topic of a body weight
                diary
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
          </TimelineSeparator>
          <TimelineContent>
            <div className="education__item-box">
              <h2 className="education__title">
                Educational Center (it-academy) of HTP{" "}
              </h2>
              <h4 className="education__sup-title">
                Project role: Front-end Developer / 04.19 - 07.19
              </h4>
              <p className="education__description">
                Finel project of the HTML / CSS cours on the topic of a medical
                center website
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Section>
  );
};

export default Experience;
