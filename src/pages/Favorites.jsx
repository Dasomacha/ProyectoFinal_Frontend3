import React from 'react';
import { useFavorites } from '../context/FavoritesContext'; 
import Card from '../components/Card';
import pokeballImage from '../assets/pokeball.png';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites">
      <div className='title'>
      <h1>Mis Favoritos </h1>
      <img src={pokeballImage} alt="Pokeball" className="pokeball-icon" />
      </div>
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
