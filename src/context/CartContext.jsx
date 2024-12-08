// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(); // Creamos el contexto del carrito

export const useCart = () => {
  return useContext(CartContext); // Hook para acceder al carrito en otros componentes
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Estado para el carrito

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Agrega el producto al carrito
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id)); // Elimina un producto del carrito por ID
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
