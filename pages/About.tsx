import React from "react";
import Header from "../components/header";
import styles from "../styles/About.module.scss";
import me from "../public/me.jpg";
import FishExp from "../components/fishExperiences";
import { p1, p2 } from "./content/about";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <Header title="About Me" color="#ed76b7" />
      <div className={styles.content}>
        <div className={styles.text_container}>
          <h2 className={styles.subtitle}>Hey, you found me! 👋</h2>
          {p1}
          <h2 className={styles.subtitle}>Outside of work,</h2>
          {p2}
        </div>
        <div className={styles.img_container}>
          <img src={me} alt="Bonnie Peng Profile" className={styles.img}></img>
          <div className={styles.fish_container}>
            <FishExp />
          </div>
        </div>
      </div>
    </section>
  );
}
