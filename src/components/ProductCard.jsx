import React from "react";
import { useFavorites } from "../context/FavoritesContext"; // Importamos el contexto de favoritos
import { Link } from "react-router"; // Importamos Link para la navegación

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
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <h3>{product.name}</h3>
      
      <div className="buttons">
        {/* Botón de favoritos */}
        <button onClick={handleFavoriteToggle}>
          {isFavorite ? "❤️" : "🤍"} {/* Cambia entre corazón lleno y vacío */}
        </button>
        
        {/* Botón de Información */}
        <Link to={`/product/${product.id}`}>
          <button>🔍 Info</button> {/* Botón de información */}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
