export const getCharacters = async () => {
	const url = "https://pokeapi.co/api/v2/pokemon";
	const limit = 60; // Número de Pokémon a obtener

	try {
		const response = await fetch(`${url}?limit=${limit}`);
		const data = await response.json();

		// Obtener datos detallados para cada Pokémon
		const detailedData = await Promise.all(
			data.results.map(async (character, index) => {
				const characterDetails = await fetch(character.url).then((response) =>
					response.json()
				);
				return {
					id: index, // Clave única generada a partir del índice
					name: character.name,
					image: characterDetails.sprites.front_default,
					types: characterDetails.types, // Tipos de Pokémon
					abilities: characterDetails.abilities,  // URL de la imagen
					stats: characterDetails.stats,
					height: characterDetails.height,
				};
			})
		);

		return detailedData;
	} catch (error) {
		console.error("Error fetching Pokémon data:", error);
		return [];
	}
};

