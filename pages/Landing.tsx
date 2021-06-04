import React, { useEffect, useState } from "react";
import styles from "../styles/Landing.module.scss";
import Typist from "react-typist";
import JellyfishButton from "../components/jellyfishBtn";

const TextLoop = () => {
  const messages = [
    "a software engineer 👩‍💻",
    "passionate about photography 📸",
    "a fashion enthusiast 👗",
    "happy to meet you!",
  ];
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
          stdTypingDelay={20}
          className="typist"
        >
          <h2
            style={{
              margin: 0,
              marginLeft: 18,
              color: color,
              letterSpacing: 1.5,
              fontSize: 48,
            }}
          >
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

const Landing = () => {
  return (
    <section id="landing" className={styles.landing}>
      <div className={styles.text_container}>
        <h1 className={styles.hello}>Hi, I'm Bonnie!</h1>
        <span className={styles.iam_container}>
          <h2 className={styles.iam}>I'm </h2>
          <TextLoop />
        </span>
      </div>
      <span className="nav-1">
        <JellyfishButton href="#about" color="pink" />
      </span>
      <span className="nav-2">
        <JellyfishButton href="#projects" color="purple" />
      </span>
      <span className="nav-3">
        <JellyfishButton href="#contact" color="yellow" />
      </span>
    </section>
  );
};

export default Landing;
