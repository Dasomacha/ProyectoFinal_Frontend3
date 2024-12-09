/* Componente de favoritos */
import React from 'react';
import { useFavorites } from '../context/FavoritesContext'; // Importamos el hook del contexto
import Card from '../components/Card'; // Importamos el componente FavoriteItem

const Favorites = () => {
  const { favorites } = useFavorites(); // Obtén el estado de favoritos desde el contexto

  return (
    <div className="favorites">
      <h1>Mis Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No tienes personajes favoritos.</p>
      ) : (
        <div className="card-list">
          {favorites.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
