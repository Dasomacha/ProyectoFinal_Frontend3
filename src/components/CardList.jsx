import React from "react";
import Card from "./Card";

const CardList = ({ characters }) => {
  return (
    <div className="card-list">
      {characters.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;

