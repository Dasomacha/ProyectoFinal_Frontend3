import React from 'react';
import { useFavorites } from '../context/FavoritesContext'; 
import Card from '../components/Card';
const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites">
      <h1>Mis Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No tienes personajes en favoritos.</p>
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
