import React, { useEffect, useState } from "react";
import Typist from "react-typist";
import JellyfishButton from "../components/jellyfishBtn";
import styles from "../styles/Landing.module.scss";

const TextLoop = () => {
  const messages = [
    "a software engineer 👩‍💻",
    "passionate about photography 📸",
    "always on my feet 🤸‍♂️",
    "happy to meet you!",
  ];
  //               pink       purple     green     yellow
  const colors = ["#FBA1D4", "#E2B4FF", "#ADE989", "#FFE595"];
  const [message, setMessage] = useState(messages[0]);
  const [color, setColor] = useState(colors[0]);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    setTyping(true);
  }, [typing]);

  const repeatText = () => {
    setTyping(false);
    let index = messages.indexOf(message);
    if (index >= messages.length - 1) {
      index = -1;
    }
    setMessage(messages[index + 1]);
    setColor(colors[index + 1]);
  };

  return (
    <div>
      {typing ? (
        <Typist
          cursor={{ show: false }}
          onTypingDone={() => {
            repeatText();
          }}
          stdTypingDelay={1}
          className="typist"
        >
          <h2 style={{ color: color }} className={styles.message}>
            {message}
          </h2>
          <Typist.Backspace count={message.length} delay={700} />
        </Typist>
      ) : (
        <h2 className={color}>{message}</h2>
      )}
    </div>
  );
};

export default function Landing() {
  const bgCircle = "/svg/bg-circle.svg";
  return (
    <section id="landing" className={styles.landing}>
      <div className={styles.container}>
        <div className={styles.text_container}>
          <h1 className={styles.hello}>Hi, I'm Bonnie!</h1>
          <span className={styles.iam_container}>
            <h2 className={styles.iam}>I'm </h2>
            <TextLoop />
          </span>
        </div>

        <div className={styles.nav1}>
          <JellyfishButton href="#about" color="pink" />
        </div>
        <div className={styles.nav2}>
          <JellyfishButton href="#experience" color="purple" />
        </div>
        <div className={styles.nav3}>
          <JellyfishButton href="#contact" color="yellow" />
        </div>

        <img
          src={bgCircle}
          alt=""
          className={styles.bg_circle1 + " undraggable"}
        />
        <img
          src={bgCircle}
          alt=""
          className={styles.bg_circle2 + " undraggable"}
        />
        <img
          src={bgCircle}
          alt=""
          className={styles.bg_circle3 + " undraggable"}
        />
        <img
          src={bgCircle}
          alt=""
          className={styles.bg_circle4 + " undraggable"}
        />
      </div>
    </section>
  );
}
