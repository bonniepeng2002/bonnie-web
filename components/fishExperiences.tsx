import React from "react";
import styles from "../styles/FishExp.module.scss";

export default function FishExp() {
  const SmallFish = "/svg/fish/sm-fish.svg";
  return (
    <div className={styles.fish_container}>
      <img className={styles.smFish1 + " undraggable"} src={SmallFish} alt="" />
      <img className={styles.smFish2 + " undraggable"} src={SmallFish} alt="" />
      <img className={styles.smFish3 + " undraggable"} src={SmallFish} alt="" />
      <img className={styles.smFish4 + " undraggable"} src={SmallFish} alt="" />

      <div className={styles.exp1}>
        <img
          className={styles.fishImg + " undraggable"}
          src={"/svg/fish/pink-fish.svg"}
          alt=""
        />
      </div>

      <div className={styles.exp2}>
        <img
          className={styles.fishImg + " undraggable"}
          src={"/svg/fish/yellow-fish.svg"}
          alt=""
        />
      </div>

      <div className={styles.exp3}>
        <img
          className={styles.fishImg + " undraggable"}
          src={"/svg/fish/blue-fish.svg"}
          alt=""
        />
      </div>
    </div>
  );
}
