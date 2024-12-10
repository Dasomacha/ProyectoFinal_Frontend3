import React from "react";
import { Link, useLocation } from "react-router";
import styles from "./Navbar.module.css"; 
import logo from "../../assets/logo.png"; 

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link
            to="/"
            className={`${styles.navLink} ${location.pathname === "/" ? styles.active : ""}`}
          >
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            to="/favorites"
            className={`${styles.navLink} ${location.pathname === "/favorites" ? styles.active : ""}`}
          >
            Favoritos
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            to="/comments"
            className={`${styles.navLink} ${location.pathname === "/comments" ? styles.active : ""}`}
          >
            Comentarios
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
