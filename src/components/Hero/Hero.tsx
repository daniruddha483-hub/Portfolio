import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.welcome}>
        Welcome to my digital space
      </p>

      <h1>
        Hi, I'm <span>Aniruddha Dhota</span>
      </h1>

      <h2>Designer | Developer | Explorer</h2>

      <p className={styles.description}>
        I design ideas, explore technology, and build digital
        experiences that combine creativity and engineering.
      </p>

      <div className={styles.buttons}>
        <button>View Projects</button>
        <button>Contact Me</button>
      </div>
    </section>
  );
}

export default Hero;