// src/pages/home/Home.jsx
import React from "react";
import { Link } from "react-router"; // Importamos el componente Link
import ProductList from '../../components/ProductList';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la tienda</h1>
	  <ProductList />
      {/* Enlace al carrito */}
      <Link to="/cart">
        <button>Ir al Carrito</button>
      </Link>
      {/* Aquí puedes agregar más contenido para la página de inicio */}
    </div>
  );
};

export default Home;
