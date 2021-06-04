import React from "react";
import Header from "../components/header";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <Header title="About Me" color="#ed76b7" />
    </section>
  );
}
