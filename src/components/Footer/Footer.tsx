import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.tagline}>
          Building ideas into reality.
        </p>

        <div className={styles.links}>
          <a
            href="https://github.com/daniruddha483-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aniruddha-dhota-24a010350/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:daniruddha483@gmail.com">
            Email
          </a>
        </div>

        <p className={styles.copyright}>
          © 2026 Aniruddha Dhota. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;