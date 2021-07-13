import React from "react";
import Accordion from "../components/accordion";
import Header from "../components/header";
import { projects } from "./content/projects";
import styles from "../styles/Projects.module.scss";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <Header title="Projects" color="#be63f6" />
      <div className={styles.content}>
        {projects.map((item) => {
          return (
            <Accordion
              title={item.title}
              subtitle={item.subtitle}
              tools={item.tools}
              github={item.github}
              color={item.color}
            >
              {item.desc}
            </Accordion>
          );
        })}
      </div>
    </section>
  );
}
