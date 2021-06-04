import React from "react";
import Header from "../components/header";
import styles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <Header title="Contact" color="#ffbc58"/>
    </section>
  );
}
