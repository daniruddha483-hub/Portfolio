import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram
} from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerMain}>

        <div className={styles.footerBrand}>
          <span className={styles.footerLogo}>AD</span>

          <p>
            Building ideas into reality.
          </p>
        </div>

        <div className={styles.footerSocials}>

          <a
            href="https://github.com/daniruddha483-hub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/aniruddha-dhota-24a010350/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:daniruddha483@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

        </div>

      </div>

      <div className={styles.footerLine}></div>

      <div className={styles.footerBottom}>
        <p>
          © 2026 Aniruddha Dhota. All rights reserved.
        </p>

        <p>
          Designer · Developer · Explorer
        </p>
      </div>

    </footer>
  );
}

export default Footer;