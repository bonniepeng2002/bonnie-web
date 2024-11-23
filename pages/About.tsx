import React from "react";
import { Fade } from "react-awesome-reveal";
import Header from "../components/header";
import FishExp from "../components/fishExperiences";
import { p1, p2 } from "../content/about";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <Header title="About Me" color="#ed76b7" />
      <div className={styles.content}>
        <Fade direction="left">
          <div className={styles.text_container}>
            <h2 className={styles.subtitle}>Hey, you found me! 👋</h2>
            {p1}
            <h2 className={styles.subtitle}>Outside of work,</h2>
            {p2}
          </div>
        </Fade>
        <div className={styles.img_container}>
          <img src={"/me4.jpg"} alt="Bonnie Peng Profile" className={styles.img}></img>
          <Fade direction="left">
            <div className={styles.fish_container}>
              <FishExp />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
