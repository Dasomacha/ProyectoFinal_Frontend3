// src/components/CartItem.jsx
import React from 'react';
import { useCart } from '../context/CartContext'; // Importamos el hook del contexto

const CartItem = ({ product }) => {
  const { removeFromCart } = useCart(); // Obtenemos removeFromCart desde el contexto

  return (
    <div className="cart-item">
      <h3>{product.name}</h3>
      <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
