import React from "react";
import Header from "../components/header";
import { experience } from "../content/experience";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import styles from "../styles/Experience.module.scss";

export default function Experience() {
  return (
    <section id="experience" className={styles.projects}>
      <Header title="Experience" color="#BE63F6" />
      <div className={styles.content}>
        <VerticalTimeline animate={true} layout="1-column">
          {experience.map((exp) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  borderTop: "10px solid " + exp.bgColor,
                }}
                position="left"
                icon={exp.logo}
                date={exp.time}
              >
                <div className={styles.title}>
                  <h2 className="vertical-timeline-element-title">
                    {exp.role}
                  </h2>
                  <h2 className={styles.company}>{" @ " + exp.company}</h2>
                </div>
                <p className="vertical-timeline-element-subtitle">
                  Tools: {exp.tools.join(", ")}
                </p>
                <div className={styles.desc}>{exp.desc}</div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}
