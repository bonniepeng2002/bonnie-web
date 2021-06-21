import React from "react";
import styles from "../styles/FishExp.module.scss";
import SmallFish from "../public/svg/sm-fish.svg";
import PinkFish from "../public/svg/pink-fish.svg";
import YellowFish from "../public/svg/yellow-fish.svg";
import BlueFish from "../public/svg/blue-fish.svg";

export default function FishExp() {
  return (
    <div className={styles.fish_container}>
      <img className={styles.smFish1 + " undraggable"} src={SmallFish} alt="" />
      <img className={styles.smFish2 + " undraggable"} src={SmallFish} alt="" />
      <img className={styles.smFish3 + " undraggable"} src={SmallFish} alt="" />
      <img className={styles.smFish4 + " undraggable"} src={SmallFish} alt="" />

      <div className={styles.exp1}>
        <img
          className={styles.pinkFish + " undraggable"}
          src={PinkFish}
          alt=""
        />
      </div>

      <div className={styles.exp2}>
        <img
          className={styles.yellowFish + " undraggable"}
          src={YellowFish}
          alt=""
        />
      </div>

      <div className={styles.exp3}>
        <img
          className={styles.blueFish + " undraggable"}
          src={BlueFish}
          alt=""
        />
      </div>
    </div>
  );
}
