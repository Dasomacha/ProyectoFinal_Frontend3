import React from 'react';
import { useFavorites } from '../context/FavoritesContext'; // Importamos el hook del contexto de favoritos

const FavoriteItem = ({ product }) => {
  const { removeFromFavorites } = useFavorites(); // Obtenemos la función para eliminar desde el contexto

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} style={{ width: "150px", height: "150px", objectFit: "cover" }} />
      <h3>{product.name}</h3>
      <button onClick={() => removeFromFavorites(product.id)}>❤️ Quitar de favoritos</button>
    </div>
  );
};

export default FavoriteItem;
