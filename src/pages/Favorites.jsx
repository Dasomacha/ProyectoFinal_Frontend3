/* Componente de favoritos */
import React from 'react';
import { useFavorites } from '../context/FavoritesContext'; // Importamos el hook del contexto
import FavoriteItem from '../components/FavoriteItem'; // Importamos el componente FavoriteItem

const Favorites = () => {
  const { favorites } = useFavorites(); // Obtén el estado de favoritos desde el contexto

  return (
    <div className="favorites">
      <h1>Mis Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No tienes productos en favoritos.</p>
      ) : (
        <div className="product-list">
          {favorites.map((product) => (
            <FavoriteItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
