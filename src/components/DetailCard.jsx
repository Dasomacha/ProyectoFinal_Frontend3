import React from "react";
import FavoriteIcon from "./FavoriteIcon";

const DetailCard = ({ card }) => {
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
  const types = Array.isArray(card.types) ? card.types.map((type) => type.type.name).join(", ") : "N/A";

  return (
    <div className="card-detail">
      <div className="left-column">
      <FavoriteIcon card={card} />
        <img
          src={card.image}
          alt={card.name}
          style={{ width: "250px", height: "250px", objectFit: "cover" }}
        />
        <h2>{card.name}</h2>
        
      </div>

      <div className="right-column">
        {/* Información adicional */}
        <div className="basic-info">
          <p><strong>Tipo:</strong> {types}</p>
          <p><strong>Habilidades:</strong> {abilities}</p>
          <p><strong>Altura:</strong> {heightInMeters} m</p>
          <div className="stats">
            <h3>Estadísticas:</h3>
            {stats}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;