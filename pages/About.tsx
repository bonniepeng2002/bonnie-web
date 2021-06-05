import React from "react";
import Header from "../components/header";
import styles from "../styles/About.module.scss";
import me from "../public/me.jpg";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.text_container}>
        <Header title="About Me" color="#ed76b7" />
        <h2 className={styles.subtitle}>Hey, you found me! 👋</h2>
        <p>
          Nice to meet you, my name is Bonnie and I’m a Computer Science student
          at the University of Waterloo! I’m interested in creating technologies
          that puts underrepresented communities first, with the hopes of
          achieving a more inclusive digital world.
        </p>
        <h2 className={styles.subtitle}>Outside of work,</h2>
        <p>
          I love bouncing around the Halifax waterfront with my camera, baking
          (cake for breakfast anyone??), and dreaming of all the boba I’m going
          to chug after COVID is over.
        </p>
      </div>
      <div className={styles.image_container}>
        <img src={me} alt="Bonnie Peng" className={styles.img}></img>
      </div>
    </section>
  );
}
