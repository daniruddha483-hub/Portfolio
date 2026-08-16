import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
  FaBars,
  FaTimes
} from "react-icons/fa";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>

      <Link
        to="/"
        className={styles.logo}
        onClick={closeMenu}
      >
        AD
      </Link>

      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={`${styles.links} ${
          menuOpen ? styles.menuOpen : ""
        }`}
      >

        <Link to="/" onClick={closeMenu}>
          <FaHome />
          <span>Home</span>
        </Link>

        <Link to="/about" onClick={closeMenu}>
          <FaUser />
          <span>About</span>
        </Link>

        <Link to="/skills" onClick={closeMenu}>
          <FaCode />
          <span>Skills</span>
        </Link>

        <Link to="/projects" onClick={closeMenu}>
          <FaFolderOpen />
          <span>Projects</span>
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          <FaEnvelope />
          <span>Contact</span>
        </Link>

            </div>

    </nav>
  );
}

export default Navbar;