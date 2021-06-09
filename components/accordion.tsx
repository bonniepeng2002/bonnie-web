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
    <div className={styles.container} style={{ backgroundColor: props.color }}>
      <button onClick={() => setExpanded(!expanded)} className={styles.summary}>
        <h1 className={styles.title}>{props.title}</h1>
        <img
          src={chevron}
          alt="expand card"
          className={
            styles.chevron +
            (expanded ? " " + styles.expanded_chevron : "") +
            " undraggable"
          }
        />
      </button>
      {expanded && (
        <div className={styles.details}>
          <h4 className={styles.tools}>{props.tools.join(", ")}</h4>
          <p>{props.children}</p>
          <a className={styles.github} href={props.github} target="_blank">
            <img src={github} alt="go to Github repo" className="undraggable" />
          </a>
        </div>
      )}
    </div>
  );
}
