import React from "react";
import { Link } from "react-router"; // Asegúrate de usar "react-router-dom"
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default Home;
