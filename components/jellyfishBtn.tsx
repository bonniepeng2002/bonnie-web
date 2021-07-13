import React from "react";
import pinkJelly from "../public/svg/jellyfish/pink-jellyfish.svg";
import purpleJelly from "../public/svg/jellyfish/purple-jellyfish.svg";
import yellowJelly from "../public/svg/jellyfish/yellow-jellyfish.svg";
import styles from "../styles/JellyfishBtn.module.scss";

interface Props {
  href: string;
  color: string;
}

export default function JellyfishButton(props: Props) {
  const getJellyfish = () => {
    switch (props.color) {
      case "pink":
        return (
          <img
            src={pinkJelly}
            alt="About Me Button"
            className={styles.jellyfish + " undraggable"}
          />
        );
      case "purple":
        return (
          <img
            src={purpleJelly}
            alt="Projects Button"
            className={styles.jellyfish + " undraggable"}
          />
        );
      case "yellow":
        return (
          <img
            src={yellowJelly}
            alt="Contact Button"
            className={styles.jellyfish + " undraggable"}
          />
        );
      default:
        <img
          src={pinkJelly}
          alt="About Me Button"
          className={styles.jellyfish + " undraggable"}
        />;
    }
  };
  const getText = () => {
    switch (props.href) {
      case "#about":
        return "About Me";
      case "#projects":
        return "Projects";
      case "#contact":
        return "Contact";
      default:
        "";
    }
  };
  const jellyfish = getJellyfish();
  const text = getText();
  const style = text === "Projects" ? " " + styles.delay : "";

  return (
    <figure className={styles.container}>
      <a href={props.href} className={styles.link + style}>
        <div className={styles.hover}>
          <span>{jellyfish}</span>
          <p className={styles.text}>{text}</p>
        </div>
      </a>
    </figure>
  );
}
