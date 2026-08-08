import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Building ideas into reality.</p>

      <div className={styles.links}>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Email</a>
      </div>

      <p>© 2026 Aniruddha Dhota. All rights reserved.</p>
    </footer>
  );
}

export default Footer;