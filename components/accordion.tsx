import React, { ReactNode, useState } from "react";
import ProjectHeader from "./projectHeader";
import chevron from "../public/svg/chevron.svg";
import github from "../public/svg/github.svg";
import styles from "../styles/Accordion.module.scss";

interface Props {
  title: string;
  subtitle?: string;
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
        <ProjectHeader title={props.title} subtitle={props.subtitle ?? ""} />
        <img
          src={chevron}
          alt="expand card"
          className={styles.chevron + " undraggable"}
          aria-expanded={expanded}
        />
      </div>
      <div className={styles.details} aria-expanded={!expanded}>
        <h4 className={styles.tools}>{props.tools.join(", ")}</h4>
        <div className={styles.desc}>{props.children}</div>
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
