import React from "react";
import Header from "../components/header";
import styles from "../styles/Projects.module.scss";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <Header title="Projects" color="#be63f6"/>
    </section>
  );
}
