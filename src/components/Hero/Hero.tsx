import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

function Hero() {
  const fullText =
    "I design ideas, explore technology, and build digital experiences that combine creativity and engineering.";

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;

      if (index >= fullText.length) {
        clearInterval(typing);
      }
    }, 35);

    return () => clearInterval(typing);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.welcome}>
          Welcome to my digital space
        </p>

        <h1 className={styles.title}>
          Hi, I'm
          <span>Aniruddha Dhota</span>
        </h1>

        <h2 className={styles.subtitle}>
          Designer | Developer | Explorer
        </h2>

        <p className={styles.description}>
          {displayText}
          <span className={styles.cursor}>|</span>
        </p>

        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.primary}`}>
            View Projects
          </button>

          <button className={styles.button}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;