import React from "react";
import styles from "../styles/Header.module.scss";
import highlight from "../public/svg/highlight.svg";

interface Props {
  title: string;
  color: string;
}

function Header(props: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{props.title}</h1>
      <img
        src={highlight}
        alt=""
        style={{ backgroundColor: props.color }}
        className={styles.highlight + " undraggable"}
      />
    </div>
  );
}

export default Header;
