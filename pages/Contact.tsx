import React from "react";
import Header from "../components/header";
import LinkedIn from "../public/svg/li-shell.svg";
import Email from "../public/svg/email-shell.svg";
import Github from "../public/svg/gh-shell.svg";
import styles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <Header title="Contact" color="#ffbc58" />
      <div className={styles.content}>
        <div className={styles.social_container}>
          <h1 className={styles.header}>Let's get in touch!</h1>
          <div className={styles.shell_container}>
            <div className={styles.shell_container1}>
              <a
                className={styles.linkedin}
                href="https://www.linkedin.com/in/bonniepeng/"
                target="_blank"
              >
                <img src={LinkedIn} alt="LinkedIn" className={styles.shell} />
              </a>
              <a
                className={styles.github}
                href="https://github.com/bonniepeng2002"
                target="_blank"
              >
                <img src={Github} alt="Github" className={styles.shell} />
              </a>
            </div>
            <div className={styles.shell_container2}>
              <a
                className={styles.email}
                href="mailto:bonnie.peng@uwaterloo.ca"
              >
                <img src={Email} alt="Email" className={styles.shell} />
              </a>
            </div>
          </div>
        </div>
        <iframe
          src="https://drive.google.com/file/d/13Fg6rJVgYh6fZaEQ8MfdMG-L-A8TAwiW/preview"
          allow="autoplay"
          className={styles.resume}
        ></iframe>
      </div>
    </section>
  );
}
