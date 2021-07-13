import React, { useEffect, useState } from "react";
import Typist from "react-typist";
import styles from "../styles/Footer.module.scss";

const TextLoop = () => {
  const messages = [
    "Made by Bonnie with 💖",
    "Built with TypeScript, Sass and React",
    "Last Updated: August 2021",
    "Thanks for viewing my website!",
  ];

  const [message, setMessage] = useState(messages[0]);
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
          className={"typist " + styles.typist}
        >
          <p className={styles.message}>{message}</p>
          <Typist.Backspace count={message.length} delay={700} />
        </Typist>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default function Footer() {
  return (
    <footer className={styles.container}>
      <TextLoop />
      <p className={styles.copyright}>&copy; Bonnie Peng, 2021</p>
    </footer>
  );
}
