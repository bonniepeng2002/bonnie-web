import React, { useEffect, useState } from "react";
import styles from "../styles/Landing.module.css";
import Typist from "react-typist";

const Landing = () => {
  return (
    <section id="landing" className={styles.landing}>
      <div className={styles.text_container}>
        <h1 className={styles.hello}>Hi, I'm Bonnie!</h1>
        <span className={styles.iam_container}>
          <h2 className={styles.iam}>I'm </h2>
        </span>
      </div>
    </section>
  );
}

export default Landing;
