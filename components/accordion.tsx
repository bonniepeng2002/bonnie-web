import React, { ReactNode, useState } from "react";
import styles from "../styles/Accordion.module.scss";
import chevron from "../public/svg/chevron.svg";
import github from "../public/svg/github.svg";

interface Props {
  title: string;
  tools: string[];
  children: ReactNode;
  github: string;
  color: string;
  link?: string;
}

export default function Accordion(props: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <button
      onClick={() => setExpanded(!expanded)}
      className={styles.container}
      style={{ backgroundColor: props.color }}
    >
      <div className={styles.summary}>
        <h1 className={styles.title}>{props.title}</h1>
        <img
          src={chevron}
          alt="expand card"
          className={styles.chevron + " undraggable"}
          aria-expanded={expanded}
        />
      </div>
      <div className={styles.details} aria-expanded={!expanded}>
        <h4 className={styles.tools}>{props.tools.join(", ")}</h4>
        <p className={styles.desc}>{props.children}</p>
        <a className={styles.github} href={props.github} target="_blank">
          <img
            src={github}
            alt="go to Github repo"
            className="undraggable"
            width={35}
          />
        </a>
      </div>
    </button>
  );
}
