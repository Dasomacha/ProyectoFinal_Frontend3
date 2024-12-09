import React from "react";
import { Link } from "react-router";
import FavoriteIcon from "./FavoriteIcon";

const Card = ({ card }) => {
  const types = Array.isArray(card.types) ? card.types.map((type) => type.type.name).join(", ") : "N/A";

  return (
    <div className="card">
      <FavoriteIcon card={card} />

      <Link to={`/info/${card.id}`}>
        <img
          src={card.image}
          alt={card.name}
          style={{ width: "180px", height: "180px", objectFit: "cover" }}
        />
      </Link>

      <h3>{card.name}</h3>

      {/* Mostrar tipos */}
      <p><strong>Type:</strong> {types}</p>
    </div>
  );
};

export default Card;
