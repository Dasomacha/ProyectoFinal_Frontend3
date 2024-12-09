import React from "react";
import { useFavorites } from "../context/FavoritesContext"; // Importamos el contexto de favoritos

const ProductCard = ({ product }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} style={{ width: "150px", height: "150px", objectFit: "cover" }} />
      <h3>{product.name}</h3>
      <button onClick={handleFavoriteToggle}>
        {isFavorite ? "❤️" : "🤍"} {/* Cambia entre corazón lleno y vacío */}
      </button>
    </div>
  );
};

export default ProductCard;
