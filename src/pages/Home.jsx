import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import { getCharacters } from "../services/getCharacters";
import ScrollToTop from "../components/scrollbtn/ScrollToTop";

const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [visibleCount, setVisibleCount] = useState(40);

	useEffect(() => {
		getCharacters().then((data) => setCharacters(data));
	}, []);

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const handleClearInput = () => {
		setSearchQuery("");
	};

	const handleLoadMore = () => {
		setVisibleCount((prev) => prev + 40);
	};

	const filteredCharacters = characters.filter((character) =>
		character.name.toLowerCase().startsWith(searchQuery.toLowerCase())
	);

	const visibleCharacters = searchQuery
		? filteredCharacters
		: filteredCharacters.slice(0, visibleCount);

	return (
		<div className="home-container">
			<h1>Pokémon Wiki</h1>

			<div className="search-container">
				<input
					type="text"
					placeholder="Busca un Pokémon"
					value={searchQuery}
					onChange={handleSearchChange}
					className="search-input"
				/>
				<button className="clear-button" onClick={handleClearInput}>
					Borrar
				</button>
			</div>

			<CardList characters={visibleCharacters} />

			{!searchQuery && visibleCount < characters.length && (
				<button onClick={handleLoadMore} className="load-more-button">
					Cargar más Pokémon
				</button>
			)}

			<ScrollToTop />
		</div>
	);
};

export default Home;
