import React from "react";
import { Fade } from "react-awesome-reveal";
import Accordion from "../components/accordion";
import Header from "../components/header";
import { projects } from "../content/projects";
import styles from "../styles/Projects.module.scss";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <Header title="Projects" color="#ADE989" />
      <div className={styles.content}>
        <Fade direction="up" cascade={true} damping={0.25}>
          {projects.map((item) => {
            return (
              <Accordion
                title={item.title}
                subtitle={item.subtitle}
                tools={item.tools}
                github={item.github}
                color={item.color}
                key={item.title}
              >
                {item.desc}
              </Accordion>
            );
          })}
        </Fade>
      </div>
    </section>
  );
}
