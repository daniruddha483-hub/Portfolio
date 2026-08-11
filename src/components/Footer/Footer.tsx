import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Building ideas into reality.</p>

      <div className={styles.links}>
       <div className={styles.links}>
    <a
    href="https://github.com/daniruddha483-hub"
    target="_blank"
    rel="noopener noreferrer">
    GitHub
    </a>

    <a
    href="https://www.linkedin.com/in/aniruddha-dhota-24a010350/"
    target="_blank"
    rel="noopener noreferrer">
    LinkedIn
    </a>

  <a href="mailto:daniruddha483@gmail.com">
    Email
  </a>
</div>
      </div>

      <p>© 2026 Aniruddha Dhota. All rights reserved.</p>
    </footer>
  );
}

export default Footer;