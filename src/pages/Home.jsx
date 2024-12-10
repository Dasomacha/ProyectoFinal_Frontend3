import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import { getCharacters } from "../services/getCharacters";
import ScrollToTop from "../components/scrollbtn/ScrollToTop";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getCharacters().then((data) => setCharacters(data));
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClearInput = () => {
    setSearchQuery("");
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1>Pokémon Wiki</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Busca un pokémon"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button className="clear-button" onClick={handleClearInput}>
          Borrar
        </button>
      </div>

      <CardList characters={filteredCharacters} />

      <ScrollToTop />
    </div>
  );
};

export default Home;
