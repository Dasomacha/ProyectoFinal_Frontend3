// src/components/ProductCard.jsx
import React from 'react';
import { useCart } from '../context/CartContext'; // Importamos el contexto del carrito

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Obtenemos la función addToCart desde el contexto

  const handleAddToCart = () => {
    addToCart(product); // Llama a la función addToCart cuando el usuario hace clic
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
      <h3>{product.name}</h3>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
