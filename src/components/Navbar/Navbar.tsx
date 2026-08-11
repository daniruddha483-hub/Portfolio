import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} glass ${
        hidden ? styles.hidden : ""
      }`}
    >
      <div className={styles.logo}>
        AD
      </div>

      <div className={styles.links}>
        <a href="/">Home</a>
        <a href="/skills">Skills</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;