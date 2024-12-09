import React from "react";
import { Link } from "react-router"; // Usar react-router-dom en vez de "react-router"
import styles from "./Navbar.module.css"; // Asegúrate de que los estilos sean importados correctamente
import logo from "../../assets/logo.png"; // Importa la imagen desde assets

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/favorites" className={styles.navLink}>Favoritos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
