// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link } from "react-router";
import "./Navbar.css"; // Importamos los estilos CSS

const Navbar = () => {
  return (
    <nav className="navbar">
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
