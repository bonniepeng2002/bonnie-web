import React from "react";
import styles from "../styles/ProjectHeader.module.scss";

interface Props {
  title: string;
  subtitle?: string;
}

export default function ProjectHeader(props: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {props.title}
        {props.subtitle && ":"}
      </h1>
      {props.subtitle !== "" && (
        <h1 className={styles.subtitle}> {props.subtitle}</h1>
      )}
    </div>
  );
}
