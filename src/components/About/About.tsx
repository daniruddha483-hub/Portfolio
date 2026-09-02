import styles from "./About.module.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
function About() {
  return (
    <section className={styles.about}>
      <div className={styles.heading}>
        <p className={styles.label}>GET TO KNOW ME</p>

        <h2>About Me</h2>

        <p className={styles.intro}>
          A little about the person behind the projects.
        </p>
      </div>

      <div className={styles.aboutGrid}>
        <div className={styles.story}>
          <h3>Who I am</h3>

          <p>
            I'm Aniruddha Dhota, a designer and developer who enjoys creating
            things that combine creativity and technology.
          </p>

          <p>
            I love exploring new ideas, experimenting with technology, and
            turning concepts into real projects.
          </p>
        </div>

        <div className={styles.focus}>
          <h3>What I do</h3>

          <div className={styles.focusList}>
            <span>Design</span>
            <span>Development</span>
            <span>Problem Solving</span>
            <span>Exploration</span>
          </div>
        </div>
      </div>
      <div className={styles.ctaWrapper}>
        <Link to="/about" className={styles.ctaButton}>
          Learn More About Me
          <FiArrowRight className={styles.ctaIcon} />
        </Link>
      </div>
    </section>
  );
}

export default About;
