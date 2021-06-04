import React from "react";
import styles from "../styles/Header.module.scss";

interface Props {
  title: string;
  color: string;
}

function Header(props: Props) {
  return <h1>{props.title}</h1>;
}

export default Header;
