import React from "react";
import styles from "../styles/Header.module.scss";

interface Props {
  title: string;
  color: string;
}

export default function Header(props: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{props.title}</h1>
      <img
        src={"/svg/highlight.svg"}
        alt=""
        style={{ backgroundColor: props.color }}
        className={styles.highlight + " undraggable"}
      />
    </div>
  );
}
