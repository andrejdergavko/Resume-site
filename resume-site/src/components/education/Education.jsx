import React from "react";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import Section from "../section/Section";

import "./education.scss";

const Education = () => {
  return (
    <Section id="education" number="02" title="Education" gray={false}>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="education__item-box">
              <h2 className="education__title">
                Web application development with React.JS
              </h2>
              <h4 className="education__sup-title">
                Educational Center (it-academy) of HTP
              </h4>
              <p className="education__description">01.20 - 03.20</p>
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
                Web application development with JavaScript{" "}
              </h2>
              <h4 className="education__sup-title">
                Educational Center (it-academy) of HTP
              </h4>
              <p className="education__description">09.19 - 12.19</p>
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
                Website development with HTML, CSS & JavaScript
              </h2>
              <h4 className="education__sup-title">
                Educational Center (it-academy) of HTP
              </h4>
              <p className="education__description">04.19 - 07.19</p>
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
                Economics and enterprise management
              </h2>
              <h4 className="education__sup-title">
                Yanka Kupala State University of Grodno
              </h4>
              <p className="education__description">2013 - 2017</p>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Section>
  );
};

export default Education;
