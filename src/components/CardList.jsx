import React, { useEffect, useState } from "react";
import { getCharacters } from "../services/getCharacters"; 
import Card from "./Card";

const CardList = () => {
  const [Cards, setCard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      setCard(data);
    };
    fetchData();
  }, []);

  return (
    <div className="card-list">
      {Cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
