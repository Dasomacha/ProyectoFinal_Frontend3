import React from "react";
import { Link } from "react-router"; // Asegúrate de usar "react-router-dom"
import "./Navbar.css"; // Importamos los estilos CSS
import logo from "../../assets/logo.png"; // Importa la imagen desde assets

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/favorites" className="nav-link">Favoritos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;