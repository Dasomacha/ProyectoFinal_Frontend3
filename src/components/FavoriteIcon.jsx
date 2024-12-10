import React, { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import Heart from "@react-sandbox/heart";

const FavoriteIcon = ({ card }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavoriteInitial = favorites.some((item) => item.id === card.id);
  const [isFavorite, setFavorite] = useState(isFavoriteInitial);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(card.id);
    } else {
      addToFavorites(card);
    }
    setFavorite(!isFavorite);
  };

  return (
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
  );
};

export default FavoriteIcon;