import React, { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import Heart from "@react-sandbox/heart";

const DetailCard = ({ card }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavoriteInitial = favorites.some((item) => item.id === card.id);
  const [isFavorite, setFavorite] = useState(isFavoriteInitial);

  const handleFavoriteToggle = () => {
    setFavorite(!isFavorite);
    if (isFavorite) {
      removeFromFavorites(card.id);
    } else {
      addToFavorites(card);
    }
  };

  const types = Array.isArray(card.types)
    ? card.types.map((type) => type.type.name).join(", ")
    : "N/A";

  const abilities = Array.isArray(card.abilities)
    ? card.abilities.map((ability) => ability.ability.name).join(", ")
    : "N/A";

  const stats = card.stats ? (
    card.stats.map((stat) => (
      <p key={stat.stat.name}>
        <strong>{stat.stat.name}:</strong> {stat.base_stat}
      </p>
    ))
  ) : (
    <p>N/A</p>
  );

  const heightInMeters = card.height ? (card.height / 10).toFixed(1) : "N/A";

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

      <img
        src={card.image}
        alt={card.name}
        style={{ width: "180px", height: "180px", objectFit: "cover" }}
      />

      <h3>{card.name}</h3>

      <div className="basic-info">
        <p><strong>Type:</strong> {types}</p> 
        <p><strong>Abilities:</strong> {abilities}</p>
        <p><strong>Height:</strong> {heightInMeters} m</p>
        <div className="stats">
          <h4>Stats:</h4>
          {stats}
        </div>
      </div>

    </div>
  );
};

export default DetailCard;
