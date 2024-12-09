import React, { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router"; 
import Heart from "@react-sandbox/heart";

const Card = ({ card }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavoriteInitial = favorites.some((item) => item.id === card.id);
  const [isFavorite, setFavorite] = useState(isFavoriteInitial);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(card.id);
    } else {
      addToFavorites(card);
    }
    setFavorite(!isFavorite); // Luego de la acción, actualiza el estado
  };

  const types = Array.isArray(card.types) ? card.types.map((type) => type.type.name).join(", ") : "N/A";
  const abilities = Array.isArray(card.abilities) 
    ? card.abilities.map((ability) => ability.ability.name).join(", ")
    : "N/A";

  return (
    <div className="card">
      <div className="heart-icon">
        <Heart
          width={32}
          height={32}
          active={isFavorite} 
          onClick={handleFavoriteToggle} 
          activeColor="#ff0000" 
          inactiveColor="#b3b1b1"
          strokeWidth={70} 
        />
      </div>

      <Link to={`/info/${card.id}`}>
        <img
          src={card.image}
          alt={card.name}
          style={{ width: "180px", height: "180px", objectFit: "cover" }}
        />
      </Link>

      <h3>{card.name}</h3>

      <div className="basic-info">
        <p><strong>Type:</strong> {types}</p>
        <p><strong>Abilities:</strong> {abilities}</p>
      </div>
    </div>
  );
};

export default Card;
