import React from "react";
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
            src={"/svg/jellyfish/pink-jellyfish.svg"}
            alt="About Me Button"
            className={styles.jellyfish + " undraggable"}
          />
        );
      case "purple":
        return (
          <img
            src={"/svg/jellyfish/purple-jellyfish.svg"}
            alt="Experience Button"
            className={styles.jellyfish + " undraggable"}
          />
        );
      case "yellow":
        return (
          <img
            src={"/svg/jellyfish/yellow-jellyfish.svg"}
            alt="Contact Button"
            className={styles.jellyfish + " undraggable"}
          />
        );
      default:
        <img
          src={"/svg/jellyfish/pink-jellyfish.svg"}
          alt="About Me Button"
          className={styles.jellyfish + " undraggable"}
        />;
    }
  };
  const getText = () => {
    switch (props.href) {
      case "#about":
        return "About Me";
      case "#experience":
        return "Experience";
      case "#contact":
        return "Contact";
      default:
        "";
    }
  };
  const jellyfish = getJellyfish();
  const text = getText();
  const style = text === "Experience" ? " " + styles.delay : "";

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
