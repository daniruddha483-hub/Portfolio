import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  House,
  User,
  Zap,
  Rocket,
  Mail
} from "lucide-react";
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
        <Link to="/">
          <House size={18} />
          <span>Home</span>
        </Link>

        <Link to="/about">
          <User size={18} />
          <span>About</span>
        </Link>

        <Link to="/skills">
          <Zap size={18} />
          <span>Skills</span>
        </Link>

        <Link to="/projects">
          <Rocket size={18} />
          <span>Projects</span>
        </Link>

        <Link to="/contact">
          <Mail size={18} />
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;