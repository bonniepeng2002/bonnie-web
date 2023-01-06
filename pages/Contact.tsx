import React from "react";
import { AttentionSeeker } from "react-awesome-reveal";
import Header from "../components/header";
import LinkedIn from "../public/svg/shells/li-shell.svg";
import Email from "../public/svg/shells/email-shell.svg";
import Github from "../public/svg/shells/gh-shell.svg";
import styles from "../styles/Contact.module.scss";

/* <AttentionSeeker effect="bounce"></AttentionSeeker> */

const resumeLink =
  "https://drive.google.com/file/d/13c8zyyelSRl9wqbF9rvsw53JZg3YG7ae/preview";

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
        {/* <iframe
          src={resumeLink}
          allow="autoplay"
          className={styles.resume}
        ></iframe> */}
      </div>
    </section>
  );
}
