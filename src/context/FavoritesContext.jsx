// src/context/FavoritesContext.js
import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext(); // Creamos el contexto para favoritos

export const useFavorites = () => {
  return useContext(FavoritesContext); // Hook para acceder a favoritos
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]); // Estado para la lista de favoritos

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((item) => item.id === product.id)) return prevFavorites; // Evita duplicados
      return [...prevFavorites, product];
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== id)); // Elimina un favorito por ID
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
